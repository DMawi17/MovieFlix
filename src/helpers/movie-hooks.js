import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import * as api from "../api";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    /* General */
    const { IMG_URL, IMG_BG_URL, media_type, queries } = api;
    const [loading, setLoading] = useState(false);

    /* Pagination */
    // const [currentPage, setCurrentPage] = useState(1);
    // const [moviesPerPage, setMoviesPerPage] = useState(20);

    /* Nav */
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);

    /* Header */
    const [detailedBannerData, setDetailedBannerData] = useState([]);

    /* Home Page */
    const [topRated, setTopRated] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [nowPlayingTv, setNowPlayingTv] = useState([]);
    // console.log("topRated", topRated);

    /* Genre Page */
    const [genresList, setGenresList] = useState([]);
    const [customGenre, setCustomGenre] = useState([]);
    // console.log("genreList", genresList);

    const [multipleFetchMovies, setMultipleFetchMovies] = useState([]);
    const [multipleFetchTv, setMultipleFetchTv] = useState([]);
    // console.log("multipleFetchTv", multipleFetchTv);

    /* ***************************USE EFFECT***********************************/

    useEffect(() => {
        // BANNER MOVIES:
        api.fetchMovies(media_type.movie, queries.popular)
            .then((res) => res.data.results)
            .then((data) =>
                data
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .filter((v, i) => i < 10)
                    .map((movieId) => movieId.id)
            )
            .then((id) =>
                fetchDetailData(media_type.movie, id, setDetailedBannerData)
            );

        //  TOP RATED:  FIXME: FIX REPETITION
        api.fetchMovies(media_type.movie, queries.top_rated)
            .then((res) => res.data.results)
            .then((data) => data.map((movieId) => movieId.id))
            .then((id) => fetchDetailData(media_type.movie, id, setTopRated));

        // NOW PLAYING MOVIES:
        api.fetchMovies(media_type.movie, queries.playing)
            .then((res) => res.data.results)
            .then((data) => data.map((movieId) => movieId.id))
            .then((id) =>
                fetchDetailData(media_type.movie, id, setNowPlayingMovies)
            );

        // NOW PLAYING TV:
        api.fetchMovies(media_type.tv, queries.on_air)
            .then((res) => res.data.results)
            .then((data) => data.map((tvId) => tvId.id))
            .then((id) => fetchDetailData(media_type.tv, id, setNowPlayingTv));
    }, [media_type, queries]);

    // FETCH GENRE LISTS:
    useEffect(() => {
        api.fetchGenreList().then((res) => setGenresList(res.data.genres));
    }, []);

    // Multiple Fetch:

    /* MOVIE */
    useEffect(() => {
        const fetchPage = async () => {
            setLoading(true);
            const getMultiple = await api
                .fetchMultiplePages(media_type.movie, queries.top_rated)
                .then((res) => res.map((dataArr) => dataArr.data.results))
                .then((moviesArr) =>
                    moviesArr.map((movies) => movies.map((movie) => movie.id))
                );

            // Flatten the arrays to one array
            const idArr = getMultiple.flat();
            fetchDetailData(media_type.movie, idArr, setMultipleFetchMovies);

            setLoading(false);
        };

        fetchPage();
    }, [media_type.movie, queries.top_rated]);

    /* TV */
    useEffect(() => {
        const fetchPage = async () => {
            setLoading(true);
            const getMultiple = await api
                .fetchMultiplePages(media_type.tv, queries.top_rated)
                .then((res) => res.map((dataArr) => dataArr.data.results))
                .then((moviesArr) =>
                    moviesArr.map((movies) => movies.map((movie) => movie.id))
                );

            // Flatten the arrays to one array
            const idArr = getMultiple.flat();
            fetchDetailData(media_type.tv, idArr, setMultipleFetchTv);

            setLoading(false);
        };

        fetchPage();
    }, [media_type.tv, queries.top_rated]);

    /* GENRE */

    /* ******************************LOGIC************************************/

    /* Fetch details for multiple  */
    const fetchDetailData = async (mediaType, id, cb) => {
        const data = await api.fetchDetails(mediaType, id);
        return cb(data);
    };

    const fetchGenre = async (id) => {
        const genreWithId = await api
            .fetchGenre(media_type.movie, id)
            .then((genres) => ({
                id,
                genres: genres.data.results,
            }));

        setCustomGenre(genreWithId);
    };

    const filteredGenre = (id, list) => {
        return list.filter((list) => list.id === id);
    };

    const genreName = filteredGenre(customGenre.id, genresList);

    /* Nav functions  */
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleToggleLogin = () => {
        setToggleLogin(!toggleLogin);
    };

    /* General functions */

    // Truncate:
    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    // Extract the year out of date:
    const releaseYear = (date = "2022-01-01") => {
        date = date.split("-");
        const [year] = date;
        return year;
    };
    /* **********************SORT BEFORE DISPATCH****************************/

    // Home:
    const homeShelf = [
        { title: "Recommended", item: topRated },
        { title: "Latest Movies", item: nowPlayingMovies },
        { title: "Latest TV-Series", item: nowPlayingTv },
    ];

    // Movies:

    // const movieShelf = [...multipleFetchMovies];

    // console.log(movieShelf);

    /* **************************RETURN*************************************/

    return (
        <MovieContext.Provider
            value={{
                loading,
                toggleMenu,
                toggleLogin,
                // navElements,
                handleToggleMenu,
                handleToggleLogin,
                IMG_URL,
                IMG_BG_URL,
                detailedBannerData,
                truncate,
                releaseYear,
                homeShelf,
                // movieShelf,
                genresList,
                customGenre,
                fetchGenre,
                filteredGenre,
                genreName,
                multipleFetchMovies,
                multipleFetchTv,
                // currentPage,
                // moviesPerPage,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

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

    /* Genre Page */
    const [genresList, setGenresList] = useState([]);
    const [genreName, setGenreName] = useState([]);
    const [genreData, setGenreData] = useState([]);

    /* Movie and TV Pages */
    const [fetchMoviesPages, setFetchMoviesPages] = useState([]);
    const [fetchTvPages, setFetchTvPages] = useState([]);

    /* ************************** USE EFFECT **********************************/

    /* ************** HOME **********************/

    // BANNER MOVIES:

    useEffect(() => {
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
    }, [media_type.movie, queries.popular]);

    //  TOP RATED:

    useEffect(() => {
        api.fetchMovies(media_type.movie, queries.top_rated)
            .then((res) => res.data.results)
            .then((data) => data.map((movieId) => movieId.id))
            .then((id) => fetchDetailData(media_type.movie, id, setTopRated));
    }, [media_type.movie, queries.top_rated]);

    // NOW PLAYING MOVIES:

    useEffect(() => {
        api.fetchMovies(media_type.movie, queries.playing)
            .then((res) => res.data.results)
            .then((data) => data.map((movieId) => movieId.id))
            .then((id) =>
                fetchDetailData(media_type.movie, id, setNowPlayingMovies)
            );
    }, [media_type.movie, queries.playing]);

    // NOW PLAYING TV:

    useEffect(() => {
        api.fetchMovies(media_type.tv, queries.on_air)
            .then((res) => res.data.results)
            .then((data) => data.map((tvId) => tvId.id))
            .then((id) => fetchDetailData(media_type.tv, id, setNowPlayingTv));
    }, [media_type.tv, queries.on_air]);

    /* **************** MOVIE ********************/

    useEffect(() => {
        const fetchPage = async () => {
            const getMultiple = await api
                .fetchMultiplePages(media_type.movie, queries.top_rated)
                .then((res) => res.map((dataArr) => dataArr.data.results))
                .then((moviesArr) =>
                    moviesArr.map((movies) => movies.map((movie) => movie.id))
                );

            // Flatten the arrays to one array
            const idArr = getMultiple.flat();
            fetchDetailData(media_type.movie, idArr, setFetchMoviesPages);
        };

        fetchPage();
    }, [media_type.movie, queries.top_rated]);

    /* ****************** TV *********************/

    useEffect(() => {
        const fetchPage = async () => {
            const getMultiple = await api
                .fetchMultiplePages(media_type.tv, queries.top_rated)
                .then((res) => res.map((dataArr) => dataArr.data.results))
                .then((moviesArr) =>
                    moviesArr.map((movies) => movies.map((movie) => movie.id))
                );

            // Flatten the arrays to one array
            const idArr = getMultiple.flat();
            fetchDetailData(media_type.tv, idArr, setFetchTvPages);
        };

        fetchPage();
    }, [media_type.tv, queries.top_rated]);

    /* **************** GENRE ********************/

    useEffect(() => {
        const fetchPage = async () => {
            return await api.fetchGenreList().then((res) => {
                setGenresList(res.data.genres);
            });
        };

        fetchPage();
    }, []);

    /* ****************************** LOGIC ***********************************/

    /* Fetch details for multiple  */
    const fetchDetailData = async (mediaType, id, cb) => {
        const data = await api.fetchDetails(mediaType, id);
        return cb(data);
    };

    /* Call me from the nav genre */
    const fetchGenre = async (id, str) => {
        const genreWithId = await api
            .fetchMultipleGenre(media_type.movie, id)
            .then((res) => res.map((dataArr) => dataArr.data.results))
            .then((moviesArr) =>
                moviesArr.map((movies) => movies.map((movie) => movie.id))
            );

        const idArr = genreWithId.flat();

        fetchDetailData(media_type.movie, idArr, setGenreData);
        setGenreName(str);
    };

    /* **************** Nav functions ********************/

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleToggleLogin = () => {
        setToggleLogin(!toggleLogin);
    };

    /* ************** General functions *****************/

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

    /* ********************** SORT BEFORE DISPATCH ****************************/

    // Home:
    const homeShelf = [
        { title: "Recommended", item: topRated },
        { title: "Latest Movies", item: nowPlayingMovies },
        { title: "Latest TV-Series", item: nowPlayingTv },
    ];

    /* **************************RETURN*************************************/

    return (
        <MovieContext.Provider
            value={{
                loading,
                toggleMenu,
                toggleLogin,
                handleToggleMenu,
                handleToggleLogin,
                IMG_URL,
                IMG_BG_URL,
                detailedBannerData,
                truncate,
                releaseYear,
                homeShelf,
                genresList,
                fetchGenre,
                genreName,
                fetchMoviesPages,
                fetchTvPages,
                genreData,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import * as api from "../api";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    /* General */
    const { IMG_URL, IMG_BG_URL, media_type, queries } = api;

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
    const [moviesPage, setMoviesPage] = useState([]);
    const [tvPage, setTvPage] = useState([]);

    /* ************************** USE EFFECT **********************************/

    /* ************** HOME **********************/

    useEffect(() => {
        // BANNER MOVIES:

        const detailedBannerFetch = async () => {
            const request = await api.fetchMovies(
                media_type.movie,
                queries.popular
            );
            const data = request.data.results;
            const id = data
                .sort((a, b) => b.vote_average - a.vote_average)
                .filter((v, i) => i < 10)
                .map((movieId) => movieId.id);

            fetchDetailData(media_type.movie, id, setDetailedBannerData);
        };

        //  TOP RATED:

        const detailedRatedFetch = async () => {
            const request = await api
                .fetchMovies(media_type.movie, queries.top_rated)
                .then((res) => res.data.results)
                .then((data) => data.map((movieId) => movieId.id))
                .then((id) =>
                    fetchDetailData(media_type.movie, id, setTopRated)
                )
                .catch((err) => console.log(err));
            return request;
        };

        // NOW PLAYING MOVIES:

        const detailedPlayingMoviesFetch = async () => {
            const request = await api
                .fetchMovies(media_type.movie, queries.playing)
                .then((res) => res.data.results)
                .then((data) => data.map((movieId) => movieId.id))
                .then((id) =>
                    fetchDetailData(media_type.movie, id, setNowPlayingMovies)
                )
                .catch((err) => console.log(err));
            return request;
        };

        // NOW PLAYING TV:

        const detailedPlayingTvsFetch = async () => {
            const request = await api
                .fetchMovies(media_type.tv, queries.on_air)
                .then((res) => res.data.results)
                .then((data) => data.map((tvId) => tvId.id))
                .then((id) =>
                    fetchDetailData(media_type.tv, id, setNowPlayingTv)
                )
                .catch((err) => console.log(err));
            return request;
        };

        // GENRE LIST:

        const fetchGenreList = async () => {
            const request = await api
                .fetchGenreList()
                .then((res) => {
                    setGenresList(res.data.genres);
                })
                .catch((err) => console.log(err));
            return request;
        };

        detailedBannerFetch();
        detailedRatedFetch();
        detailedPlayingMoviesFetch();
        detailedPlayingTvsFetch();
        fetchGenreList();
    }, []);

    /* **************** MOVIE ********************/

    const detailedMoviesFetch = async () => {
        const getMultiple = await api
            .fetchMultiplePages(media_type.movie, queries.top_rated)
            .then((res) => res.map((dataArr) => dataArr.data.results))
            .then((moviesArr) =>
                moviesArr.map((movies) => movies.map((movie) => movie.id))
            );

        // Flatten the arrays to one array
        const idArr = getMultiple.flat();
        fetchDetailData(media_type.movie, idArr, setMoviesPage);
        return getMultiple;
    };

    /* ****************** TV *********************/

    const detailedTvsFetch = async () => {
        const getMultiple = await api
            .fetchMultiplePages(media_type.tv, queries.top_rated)
            .then((res) => res.map((dataArr) => dataArr.data.results))
            .then((moviesArr) =>
                moviesArr.map((movies) => movies.map((movie) => movie.id))
            );

        // Flatten the arrays to one array
        const idArr = getMultiple.flat();
        fetchDetailData(media_type.tv, idArr, setTvPage);

        return getMultiple;
    };

    /* ****************** GENRE *********************/

    /* Call me from the nav genre */
    const detailedGenreFetch = async (id, str) => {
        const genreWithId = await api
            .fetchMultipleGenre(media_type.movie, id)
            .then((res) => res.map((dataArr) => dataArr.data.results))
            .then((moviesArr) =>
                moviesArr.map((movies) => movies.map((movie) => movie.id))
            );

        const idArr = genreWithId.flat();

        fetchDetailData(media_type.movie, idArr, setGenreData);
        setGenreName(str);

        return genreWithId;
    };

    /* ****************************** LOGIC ***********************************/

    /* Fetch details for multiple  */
    const fetchDetailData = async (mediaType, id, cb) => {
        const data = await api.fetchDetails(mediaType, id);
        return cb(data);
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
                // loading,
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
                moviesPage,
                tvPage,
                genresList,
                genreName,
                genreData,
                //
                detailedMoviesFetch,
                detailedTvsFetch,
                detailedGenreFetch,

                //
                setGenreData,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

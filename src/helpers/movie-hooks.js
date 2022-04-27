/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { createContext, useContext } from "react";
import * as api from "../api";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    /* General */
    const { IMG_URL, img_size, media_type, queries } = api;

    /* Nav */
    // const [toggleMenu, setToggleMenu] = useState(false);
    // const [toggleLogin, setToggleLogin] = useState(false);

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

    /* Search */
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState();

    /* ************** HOME **********************/
    // BANNER MOVIES:
    const fetchDetailedBanner = useCallback(async () => {
        const request = await api.fetchMovies(
            media_type.movie,
            queries.popular
        );

        const data = request.data.results;
        const id = extractTopRated(data, 10).map((movieId) => movieId.id);
        fetchDetailedData(media_type.movie, id, setDetailedBannerData);
    }, []);


    const fetchDetailedCategory = useCallback(
        async (mediaType, query, setHook) => {
            const request = await api
                .fetchMovies(mediaType, query)
                .then((res) => res.data.results)
                .then((data) => data.map((movieId) => movieId.id))
                .then((id) => fetchDetailedData(mediaType, id, setHook))
                .catch((err) => console.log(err));
            return request;
        },
        []
    );

    // GENRE LIST:
    const fetchGenreList = useCallback(async () => {
        const request = await api
            .fetchGenreList()
            .then((res) => {
                setGenresList(res.data.genres);
            })
            .catch((err) => console.log(err));
        return request;
    }, []);

    /* **************** MOVIE ********************/

    const fetchDetailedMovies = useCallback(async () => {
        const getMultiple = await api
            .fetchMultiplePages(media_type.movie, queries.top_rated)
            .then((res) => res.map((dataArr) => dataArr.data.results))
            .then((moviesArr) =>
                moviesArr.map((movies) => movies.map((movie) => movie.id))
            );

        // Flatten the arrays to one array
        const idArr = getMultiple.flat();
        fetchDetailedData(media_type.movie, idArr, setMoviesPage);
        return getMultiple;
    }, []);

    /* ****************** TV *********************/

    const fetchDetailedTvs = useCallback(async () => {
        const getMultiple = await api
            .fetchMultiplePages(media_type.tv, queries.top_rated)
            .then((res) => res.map((dataArr) => dataArr.data.results))
            .then((moviesArr) =>
                moviesArr.map((movies) => movies.map((movie) => movie.id))
            );

        // Flatten the arrays to one array
        const idArr = getMultiple.flat();
        fetchDetailedData(media_type.tv, idArr, setTvPage);

        return getMultiple;
    }, []);

    /* ****************** GENRE *********************/

    /* Call me from the nav genre */
    const fetchDetailedGenre = useCallback(async (id, str) => {
        const genreWithId = await api
            .fetchMultipleGenre(queries.discover, media_type.movie, id)
            .then((res) => res.map((dataArr) => dataArr.data.results))
            .then((moviesArr) =>
                moviesArr.map((movies) => movies.map((movie) => movie.id))
            );

        const idArr = genreWithId.flat();

        fetchDetailedData(media_type.movie, idArr, setGenreData);
        setGenreName(str);

        return genreWithId;
    }, []);

    /* ****************** SEARCH *********************/

    const fetchDetailedSearch = useCallback(async (term) => {
        if (term !== "") {
            return await api
                .fetchSearch(queries.search, media_type.multi, term)
                .then((res) => res.data.results)
                .then((movies) => {
                    const resultsOfFive = extractTopRated(movies);
                    setSearchResults(resultsOfFive);
                });
        }
    });

    /* ****************************** LOGIC ***********************************/

    /* Fetch details for multiple  */
    const fetchDetailedData = useCallback(async (mediaType, id, cb) => {
        const data = await api.fetchDetails(mediaType, id);
        return cb(data);
    }, []);

    /* **************** Nav functions ********************/

    // const handleToggleMenu = () => {
    //     setToggleMenu(!toggleMenu);
    // };

    // const handleToggleLogin = () => {
    //     setToggleLogin(!toggleLogin);
    // };

    /* ************** General functions *****************/

    // Truncate:
    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    // Extract the year out of date:
    const releaseYear = (date) => {
        return date.split("-").slice(0, 1);
    };

    // Sort and filter top rated:
    const extractTopRated = (data, top = 5) => {
        return data
            .sort((a, b) => b.vote_average - a.vote_average)
            .filter((v, i) => i < top);
    };

    /* ********************** SORT BEFORE DISPATCH ****************************/

    // Home:
    const homeShelf = [
        { title: "Recommended", item: topRated },
        { title: "Latest Movies", item: nowPlayingMovies },
        { title: "Latest TV-Series", item: nowPlayingTv },
    ];

    /* ************************************************************************/

    return (
        <MovieContext.Provider
            value={{
                IMG_URL,
                img_size,
                detailedBannerData,
                truncate,
                releaseYear,
                homeShelf,
                moviesPage,
                tvPage,
                genresList,
                genreName,
                genreData,
                searchTerm,
                searchResults,

                fetchGenreList,
                fetchDetailedBanner,
                fetchDetailedCategory,

                fetchDetailedGenre,
                fetchDetailedMovies,
                fetchDetailedTvs,
                fetchDetailedSearch,
                fetchDetailedData,
                setGenreData,
                setSearchTerm,
                setSearchResults,
                setTopRated,
                setNowPlayingMovies,
                setNowPlayingTv,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

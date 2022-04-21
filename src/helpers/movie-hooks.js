import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import * as api from "../api";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
    const [topRated, setTopRated] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [nowPlayingTv, setNowPlayingTv] = useState([]);
    const [detailedBannerData, setDetailedBannerData] = useState([]);
    const [genres, setGenres] = useState([]);
    const { IMG_URL, IMG_BG_URL, media_type, queries } = api;

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
                api
                    .fetchDetails(media_type.movie, id)
                    .then((movieDetail) => setDetailedBannerData(movieDetail))
            );

        //  TOP RATED:  FIXME: FIX REPETITION
        api.fetchMovies(media_type.movie, queries.top_rated)
            .then((res) => res.data.results)
            .then((data) => data.map((movieId) => movieId.id))
            .then((id) =>
                api
                    .fetchDetails(media_type.movie, id)
                    .then((movieDetail) => setTopRated(movieDetail))
            );

        // NOW PLAYING MOVIES:
        api.fetchMovies(media_type.movie, queries.playing)
            .then((res) => res.data.results)
            .then((data) => data.map((movieId) => movieId.id))
            .then((id) =>
                api
                    .fetchDetails(media_type.movie, id)
                    .then((movieDetail) => setNowPlayingMovies(movieDetail))
            );

        // NOW PLAYING TV:
        api.fetchMovies(media_type.tv, queries.on_air)
            .then((res) => res.data.results)
            .then((data) => data.map((tvId) => tvId.id))
            .then((id) =>
                api
                    .fetchDetails(media_type.tv, id)
                    .then((tvDetail) => setNowPlayingTv(tvDetail))
            );
    }, [media_type, queries]);

    useEffect(
        () => api.fetchGenreList().then((res) => setGenres(res.data.genres)),
        // .then((data) => data.map((list) => setGenres(list)));
        // .then((data) => data.map((genId) => genId.id))
        // .then((id) =>
        //     api
        //         .fetchGenre(media_type.movie, id)
        //         .then((genres) => setGenres(genres))
        // );
        []
    );

    // FIXME:
    const fetchGenre = (id) => {
        api.fetchGenre(media_type.movie, id).then((genres) =>
            console.log(genres)
        );
    };

    const navElements = [
        { path: "/", link: "Home" },
        { path: "genre", link: "Genre" },
        { path: "country", link: "Country" },
        { path: "movies", link: "Movies" },
        { path: "series", link: "TV-Series" },
        { path: "topImdb", link: "Top IMDB" },
    ];

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleToggleLogin = () => {
        setToggleLogin(!toggleLogin);
    };

    // Truncate the description of the banner.
    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    // Customize the movie date:
    const releaseYear = (date = "2022-01-01") => {
        date = date.split("-");
        const [year] = date;
        return year;
    };

    // PUSH ALL THE FETCHED DATA INTO AN ARRAY:
    const movieShelf = [
        { title: "Recommended", item: topRated },
        { title: "Latest Movies", item: nowPlayingMovies },
        { title: "Latest TV-Series", item: nowPlayingTv },
    ];

    return (
        <MovieContext.Provider
            value={{
                toggleMenu,
                toggleLogin,
                navElements,
                handleToggleMenu,
                handleToggleLogin,
                IMG_URL,
                IMG_BG_URL,
                detailedBannerData,
                truncate,
                releaseYear,
                movieShelf,
                genres,
                fetchGenre,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

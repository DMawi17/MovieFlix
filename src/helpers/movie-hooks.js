import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import * as api from "../api";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [topRated, setTopRated] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [nowPlayingTv, setNowPlayingTv] = useState([]);
    const [detailedBannerData, setDetailedBannerData] = useState([]);
    const { IMG_BG_URL, media_type, queries } = api;

    console.log(nowPlayingMovies)

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

    // Truncate the description of the banner.
    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    // PUSH ALL THE FETCHED DATA INTO AN ARRAY:
    const movieShelfArray = [topRated, nowPlayingMovies, nowPlayingTv];

    return (
        <MovieContext.Provider
            value={{
                IMG_BG_URL,
                detailedBannerData,
                movieShelfArray,
                truncate,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

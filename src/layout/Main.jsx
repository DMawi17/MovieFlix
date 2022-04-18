// import FilmShelf from "../components/films/FilmShelf";
// import { useMovie } from "../helpers/movie-hooks";
import React, { useState, useEffect } from "react";
import * as api from "../api";
import { useMovie } from "../helpers/movie-hooks";

// https://api.themoviedb.org/3/movie/top_rated?api_key={{movieDB}}
// https://api.themoviedb.org/3/movie/now_playing?api_key={{movieDB}}

export const MainHome = () => {
    const [topRated, setTopRated] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [nowPlayingTv, setNowPlayingTv] = useState([]);

    const { media_type, queries } = useMovie();

    //  TOP RATED:
    useEffect(() => {
        api.fetchMovies(media_type.movie, queries.top_rated).then((res) =>
            setTopRated(res.data.results)
        );
    }, [media_type.movie, queries.top_rated]);

    // NOW PLAYING MOVIES:
    useEffect(() => {
        api.fetchMovies(media_type.movie, queries.playing).then((res) =>
            setNowPlayingMovies(res.data.results)
        );
    }, [media_type.movie, queries.playing]);

    // NOW PLAYING TV:
    useEffect(() => {
        api.fetchMovies(media_type.tv, queries.top_rated).then((res) =>
            setNowPlayingTv(res.data.results)
        );
    }, [media_type.tv, queries.top_rated]);

    const movieShelfArray = [topRated, nowPlayingMovies, nowPlayingTv];

    console.log(movieShelfArray);

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                <h2>Top Rated Movies</h2>
                {movieShelfArray.map((cat) => "3 shelf")}
                {/* <FilmShelf title="Trending" fetchUrl={homeUrls.TopRated} /> */}
            </div>
        </main>
    );
};

// Render on Movies page
// export const MainFilm = () => {
//     const { genreUrls } = useMovie();

//     return (
//         <div id="Main">
//             {genreUrls.map((url) => (
//                 <div key={url.fetchUrl}>
//                     <h2>{url.title}</h2>
//                     <FilmShelf fetchUrl={url.fetchUrl} />
//                 </div>
//             ))}
//         </div>
//     );
// };

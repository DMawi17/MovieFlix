import MovieShelf from "../components/movies/MovieShelf";
// import { useState, useEffect } from "react";
// import * as api from "../api";
import { useMovie } from "../helpers/movie-hooks";

export const MainHome = () => {
    // const [topRated, setTopRated] = useState([]);
    // const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    // const [nowPlayingTv, setNowPlayingTv] = useState([]);

    const { movieShelfArray } = useMovie();

    // useEffect(() => {
    //     //  TOP RATED:
    //     api.fetchMovies(media_type.movie, queries.top_rated).then((res) =>
    //         setTopRated(res.data.results)
    //     );
    //     // NOW PLAYING MOVIES:
    //     api.fetchMovies(media_type.movie, queries.playing).then((res) =>
    //         setNowPlayingMovies(res.data.results)
    //     );
    //     // NOW PLAYING TV:
    //     api.fetchMovies(media_type.tv, queries.top_rated).then((res) =>
    //         setNowPlayingTv(res.data.results)
    //     );
    // }, [media_type, queries]);

    // // PUSH ALL THE FETCHED DATA INTO AN ARRAY:
    // const movieShelfArray = [topRated, nowPlayingMovies, nowPlayingTv];

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                <h2>Top Rated Movies</h2>
                {movieShelfArray.map((category) => (
                    <MovieShelf categories={category} />
                ))}
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

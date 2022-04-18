import MovieShelf from "../components/movies/MovieShelf";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

export const MainHome = () => {
    const { movieShelfArray } = useMovie();

    // console.log(movieShelfArray);

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                <h2>Top Rated Movies</h2>
                {movieShelfArray.map((category) => (
                    <MovieShelf key={v4()} categories={category} />
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

import { useMovie } from "../helpers/movie-hooks";
import MovieShelf from "../components/movies/MovieRows";
import { v4 } from "uuid";

export const MainHome = () => {
    const { movieShelfArray } = useMovie();

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

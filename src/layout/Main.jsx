import { useMovie } from "../helpers/movie-hooks";
import MovieRows from "../components/movies/MovieRows";
import { v4 } from "uuid";

const Main = () => {
    const { movieShelfArray } = useMovie();

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                {movieShelfArray.map((category) => (
                    <MovieRows key={v4()} categories={category} />
                ))}
            </div>
        </main>
    );
};

export default Main;

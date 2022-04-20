import { useMovie } from "../helpers/movie-hooks";
import MovieRows from "../components/movies/MovieRows";

const Main = () => {
    const { movieShelf } = useMovie();

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                {movieShelf.map(({ title, item }) => (
                    <div key={title}>
                        <p className="movie__shelf-heading">{title}</p>
                        <MovieRows {...{ item }} />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;

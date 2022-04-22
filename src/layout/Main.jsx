import { useMovie } from "../helpers/movie-hooks";
import MovieRows from "../components/movies/MovieRows";

const Main = () => {
    const { homeShelf } = useMovie();

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                {homeShelf.map(({ title, item }) => (
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

import { useMovie } from "../helpers/movie-hooks";
import MovieColls from "../components/movies/MovieColls";

const Main = () => {
    const { homeShelf } = useMovie();

    // console.log(homeShelf);

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                {homeShelf.map(({ title, item }) => (
                    <div key={title}>
                        <p className="movie__shelf-heading">{title}</p>
                        {item.map((movie) => (
                            <div key={movie.data.id}>
                                <MovieColls {...movie.data} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;

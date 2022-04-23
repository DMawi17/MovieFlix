import Header from "../layout/Header";
import MovieColls from "../components/movies/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

const Movies = () => {
    const { fetchMoviesPages } = useMovie();

    return (
        <section className="movies">
            <Header />

            <main>
                <h2 className="movie__shelf-heading">Movies</h2>
                <div className="movie__rows">
                    {fetchMoviesPages.map((movies) => (
                        <MovieColls {...movies.data} key={v4()} />
                    ))}
                </div>
            </main>

            <Footer />
        </section>
    );
};

export default Movies;

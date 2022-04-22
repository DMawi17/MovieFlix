import Header from "../layout/Header";
import MovieColls from "../components/movies/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";

const Movies = () => {
    const { fetchMoviesPages } = useMovie();

    return (
        <section className="movies">
            <Header />

            <>
                <h2 className="movie__shelf-heading">Movies</h2>
                <div className="movie__rows">
                    {fetchMoviesPages.map((movies) => (
                        <MovieColls {...movies.data} key={movies.data.id} />
                    ))}
                </div>
            </>

            <Footer />
        </section>
    );
};

export default Movies;

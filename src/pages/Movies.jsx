import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MoviePage from "../components/movie_page/MoviePage";
import { useMovie } from "../helpers/movie-hooks";

const Movies = () => {
    const { multipleFetchMovies } = useMovie();

    const newFetch = multipleFetchMovies.map((singleFetch) => {
        return singleFetch.data.results;
    });

    return (
        <section id="Movies">
            <Header />
            <h1 className="movie__shelf-heading">Movies</h1>
            <MoviePage props={newFetch} />
            <Footer />
        </section>
    );
};

export default Movies;

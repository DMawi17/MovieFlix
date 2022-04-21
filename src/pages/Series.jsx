import { useMovie } from "../helpers/movie-hooks";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MoviePage from "../components/movie_page/MoviePage";

const Series = () => {
    const { multipleFetchTv } = useMovie();

    const newFetch = multipleFetchTv.map((singleFetch) => {
        return singleFetch.data.results;
    });

    return (
        <section className="series">
            <Header />
            <h1 className="movie__shelf-heading">TV-Series</h1>
            <MoviePage props={newFetch} />
            <Footer />
        </section>
    );
};

export default Series;

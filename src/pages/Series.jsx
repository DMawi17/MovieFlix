import { useMovie } from "../helpers/movie-hooks";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MovieColls from "../components/movies/MovieColls";
import { v4 } from "uuid";

const Series = () => {
    const { fetchTvPages } = useMovie();

    return (
        <section className="movies">
            <Header />

            <>
                <h2 className="movie__shelf-heading">Tv-Series</h2>
                <div className="movie__rows">
                    {fetchTvPages.map((movies) => (
                        <MovieColls {...movies.data} key={v4()} />
                    ))}
                </div>
            </>

            <Footer />
        </section>
    );
};

export default Series;

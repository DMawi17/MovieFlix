import Header from "../layout/Header";
import MovieColls from "../components/movies/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";

function Genre() {
    const { genreData, genreName } = useMovie();

    return (
        <section className="genre">
            <Header />

            <>
                <h2 className="row__title">{genreName}</h2>
                <div className="movie__rows">
                    {genreData.map((movies) => (
                        <MovieColls {...movies.data} key={movies.data.id} />
                    ))}
                </div>
            </>

            <Footer />
        </section>
    );
}

export default Genre;

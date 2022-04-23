import Header from "../layout/Header";
import MovieColls from "../components/movies/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

function Genre() {
    const { genreData, genreName } = useMovie();

    return (
        <section className="genre">
            <Header />

            <main>
                <h2 className="row__title">{genreName}</h2>
                <div className="movie__rows">
                    {genreData.map((movies) => (
                        <MovieColls {...movies.data} key={v4()} />
                    ))}
                </div>
            </main>

            <Footer />
        </section>
    );
}

export default Genre;

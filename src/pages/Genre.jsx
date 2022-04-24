import Header from "../layout/Header";
import MovieColls from "../components/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

function Genre() {
    const { genreData, genreName } = useMovie();

    return (
        <section className="genre">
            <Header />

            <div className="main__container">
                <h1 className="movie__shelf-heading">{genreName}</h1>
                <main className="movie__rows">
                    {genreData.map((movies) => (
                        <MovieColls {...movies.data} key={v4()} />
                    ))}
                </main>
            </div>

            <Footer />
        </section>
    );
}

export default Genre;

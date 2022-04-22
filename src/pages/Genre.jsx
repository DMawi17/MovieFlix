import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import MoviePages from "../components/genre_page/GenrePage";
import { useMovie } from "../helpers/movie-hooks";
import MovieColls from "../components/movies/MovieColls";

function Genre() {
    const { genreData, genreName } = useMovie();

    console.log(genreData);

    return (
        <section className="genre">
            <Header />

            <>
                <h2 className="row__title">{genreName}</h2>
                <div className="movie__rows" id="Category">
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

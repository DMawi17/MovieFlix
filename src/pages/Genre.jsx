import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MoviePages from "../components/genre_page/GenrePage";
import { useMovie } from "../helpers/movie-hooks";

function Genre() {
    const { customGenre, genreName } = useMovie();

    const { genres } = customGenre;
    const [heading] = genreName.map(({ name }) => name);

    return (
        <section className="genre">
            <Header />
            <MoviePages props={{ genres, heading }} />
            <Footer />
        </section>
    );
}

export default Genre;

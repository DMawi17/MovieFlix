import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MoviePages from "../components/movie_page/MoviePages";

function Genre() {
    return (
        <section className="genre">
            <Header />
            <MoviePages />
            <Footer />
        </section>
    );
}

export default Genre;

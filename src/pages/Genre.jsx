import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import { useMovie } from "../helpers/movie-hooks";

function Genre() {
    const { genre } = useMovie();
    // console.log(genre);

    return (
        <section className="genre">
            <Header />
            <Main props={genre} />
            <Footer />
        </section>
    );
}

export default Genre;

import BannerSwiper from "../components/banner/BannerSwiper";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Main from "../layout/Main";
import { useMovie } from "../helpers/movie-hooks";

const Home = () => {
    const { movieShelf } = useMovie();

    return (
        <section className="home">
            <Header />
            <BannerSwiper />
            <Main props={movieShelf} />
            <Footer />
        </section>
    );
};

export default Home;

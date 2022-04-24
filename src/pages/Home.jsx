import MovieColls from "../components/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";
import BannerSwiper from "../components/banner/BannerSwiper";

const Home = () => {
    const { homeShelf } = useMovie();

    return (
        <section className="home">
            <BannerSwiper />

            <div className="main__container">
                {homeShelf.map(({ title, item }) => (
                    <div key={v4()}>
                        <h1 className="movie__shelf-heading">{title}</h1>
                        <main className="movie__rows">
                            {item.map((movie) => (
                                <div key={v4()}>
                                    <MovieColls {...movie.data} />
                                </div>
                            ))}
                        </main>
                    </div>
                ))}
            </div>

            <Footer />
        </section>
    );
};

export default Home;

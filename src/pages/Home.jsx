import Header from "../layout/Header";
import BannerSwiper from "../components/banner/BannerSwiper";
import MovieColls from "../components/movies/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

const Home = () => {
    const { homeShelf } = useMovie();

    return (
        <main className="home">
            <Header />

            <>
                <BannerSwiper />
                {homeShelf.map(({ title, item }) => (
                    <div key={v4()}>
                        <h1 className="movie__shelf-heading">{title}</h1>
                        <div className="movie__rows">
                            {item.map((movie) => (
                                <div key={v4()}>
                                    <MovieColls {...movie.data} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </>

            <Footer />
        </main>
    );
};

export default Home;

import Header from "../layout/Header";
import BannerSwiper from "../components/banner/BannerSwiper";
import MovieColls from "../components/movies/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";

const Home = () => {
    const { homeShelf } = useMovie();

    return (
        <main className="home">
            <Header />

            <>
                <BannerSwiper />
                {homeShelf.map(({ title, item }) => (
                    <div key={title}>
                        <p className="movie__shelf-heading">{title}</p>
                        <div className="movie__rows">
                            {item.map((movie) => (
                                <div key={movie.data.id}>
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

import { useEffect } from "react";
import MovieColls from "../components/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";
import BannerSwiper from "../components/banner/BannerSwiper";
import * as api from "../api";

const Home = () => {
    const {
        homeShelf,
        setTopRated,
        setNowPlayingMovies,
        setNowPlayingTv,
        fetchDetailedBanner,
        fetchDetailedCategory,
    } = useMovie();

    const { media_type, queries } = api;

    // BANNER MOVIES:
    useEffect(() => {
        fetchDetailedBanner();
    }, [fetchDetailedBanner]);

    //  TOP RATED:
    useEffect(() => {
        fetchDetailedCategory(media_type.movie, queries.top_rated, setTopRated);
    }, [
        fetchDetailedCategory,
        media_type.movie,
        queries.top_rated,
        setTopRated,
    ]);

    // NOW PLAYING MOVIES:
    useEffect(() => {
        fetchDetailedCategory(
            media_type.movie,
            queries.playing,
            setNowPlayingMovies
        );
    }, [
        fetchDetailedCategory,
        media_type.movie,
        queries.playing,
        setNowPlayingMovies,
    ]);

    // NOW PLAYING TV:
    useEffect(() => {
        fetchDetailedCategory(media_type.tv, queries.on_air, setNowPlayingTv);
    }, [fetchDetailedCategory, media_type.tv, queries.on_air, setNowPlayingTv]);

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

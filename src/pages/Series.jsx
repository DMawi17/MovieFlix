import { useEffect } from "react";
import { useMovie } from "../helpers/movie-hooks";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MovieColls from "../components/MovieColls";
import { v4 } from "uuid";

const Series = () => {
    const { tvPage, fetchDetailedTvs } = useMovie();

    useEffect(() => {
        fetchDetailedTvs();
    }, [fetchDetailedTvs]);

    return (
        <section className="movies">
            <Header />

            <div className="main__container">
                <h1 className="movie__shelf-heading">Tv-Series</h1>
                <main className="movie__rows">
                    {tvPage.map((movies) => (
                        <MovieColls {...movies.data} key={v4()} />
                    ))}
                </main>
            </div>

            <Footer />
        </section>
    );
};

export default Series;

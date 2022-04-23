/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useMovie } from "../helpers/movie-hooks";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MovieColls from "../components/movies/MovieColls";
import { v4 } from "uuid";

const Series = () => {
    const { tvPage, detailedTvsFetch } = useMovie();

    useEffect(() => {
        detailedTvsFetch();
    }, []);

    return (
        <section className="movies">
            <Header />

            <>
                <h2 className="movie__shelf-heading">Tv-Series</h2>
                <div className="movie__rows">
                    {tvPage.map((movies) => (
                        <MovieColls {...movies.data} key={v4()} />
                    ))}
                </div>
            </>

            <Footer />
        </section>
    );
};

export default Series;

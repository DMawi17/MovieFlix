/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "../layout/Header";
import MovieColls from "../components/MovieColls";
import Footer from "../layout/Footer";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

const Movies = () => {
    const { moviesPage, detailedMoviesFetch } = useMovie();

    useEffect(() => {
        detailedMoviesFetch();
    }, []);

    return (
        <section className="movies">
            <Header />

            <div className="main__container">
                <h1 className="movie__shelf-heading">Movies</h1>
                <main className="movie__rows">
                    {moviesPage.map((movies) => (
                        <MovieColls {...movies.data} key={v4()} />
                    ))}
                </main>
            </div>

            <Footer />
        </section>
    );
};

export default Movies;

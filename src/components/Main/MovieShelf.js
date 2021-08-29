import React, { useState, useEffect } from "react";
import Movie from "./Movies";

export const MovieShelf = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(fetchUrl).then((res) => res.json());
            setMovies(req.results);
            return req;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div id="Category">
            {movies.map((movie, i) => (
                <Movie key={i} {...movie} />
            ))}
        </div>
    );
};

export default MovieShelf;

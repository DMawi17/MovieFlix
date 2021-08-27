import Movie from "./Movies";
import React, { useState, useEffect } from "react";

const Category = ({ title, fetchUrl }) => {
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
        <div id="rowPosters">
            <h2>{title}</h2>
            {movies.map((movie, i) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default Category;

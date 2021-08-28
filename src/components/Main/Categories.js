import React, { useState, useEffect } from "react";
import Movie from "./Movies";

const Category = ({ fetchUrl }) => {
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
                <>
                    <Movie key={movie.id} {...movie} />
                </>
            ))}
        </div>
    );
};

export default Category;

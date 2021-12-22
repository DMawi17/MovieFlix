import Movie from "./Movies";
import { useState, useEffect } from "react";

const MovieShelf = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await fetch(fetchUrl)
                .then((res) => res.json())
                .then((data) => setMovies(data.results));
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div id="Category">
            {movies.map((movie) => (
                <Movie {...movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieShelf;

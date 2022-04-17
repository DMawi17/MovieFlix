import axios from "axios";
import Films from "./Films";
import { useState, useEffect } from "react";

const FilmShelf = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await axios
                .get(fetchUrl)
                .then((res) => setMovies(res.data.results));
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div id="Category">
            {movies.map((movie) => (
                <Films {...movie} key={movie.id} />
            ))}
        </div>
    );
};

export default FilmShelf;

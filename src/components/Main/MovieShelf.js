import Movie from "./Movies";
import { useState, useEffect } from "react";

/*
 
   _   _                      
  | | | | ___  _ __ ___   ___ 
  | |_| |/ _ \| '_ ` _ \ / _ \
  |  _  | (_) | | | | | |  __/
  |_| |_|\___/|_| |_| |_|\___|
                              
 
*/

const MovieShelf = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(fetchUrl).then((res) => res.json());
            setMovies(req.results);
            return req;
        }
        fetchData();
    }, [fetchUrl]);

    // console.log(movies[19].id);

    return (
        <div id="Category">
            {movies.map((movie, i) => (
                <Movie {...movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieShelf;

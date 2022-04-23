import MovieColls from "./MovieColls";
import { v4 } from "uuid";

const MovieRows = ({ item }) => {
    const { genreData, genreName } = item;

    return (
        <>
            <h2 className="row__title">{genreName}</h2>
            <div className="movie__rows" id="Category">
                {genreData.map((movies) => (
                    <MovieColls {...movies.data} key={v4()} />
                ))}
            </div>
        </>
    );
};

export default MovieRows;

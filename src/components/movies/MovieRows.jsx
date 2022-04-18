import MovieColls from "./MovieColls";

const MovieRows = ({ categories }) => {
    return (
        <div className="movie__rows" id="Category">
            {categories.map((movies) => (
                <MovieColls {...movies.data} key={movies.data.id} />
            ))}
        </div>
    );
};

export default MovieRows;

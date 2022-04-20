import MovieColls from "./MovieColls";

const MovieRows = ({ item }) => {
    return (
        <div className="movie__rows" id="Category">
            {item.map((movies) => (
                // console.log(movies)

                <MovieColls {...movies.data} key={movies.data.id} />
            ))}
        </div>
    );
};

export default MovieRows;

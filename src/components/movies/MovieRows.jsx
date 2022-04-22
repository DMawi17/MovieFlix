import MovieColls from "./MovieColls";

const MovieRows = ({ item }) => {
    const { genreData, genreName } = item;

    return (
        <>
            <h2 className="row__title">{genreName}</h2>
            <div className="movie__rows" id="Category">
                {genreData.map((movies) => (
                    <MovieColls {...movies.data} key={movies.data.id} />
                ))}
            </div>
        </>
    );
};

export default MovieRows;

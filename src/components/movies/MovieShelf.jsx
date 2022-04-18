import MovieRows from "./MovieRows";

const MovieShelf = ({ categories }) => {
    // console.log(categories);

    return (
        <div className="movie__shelf" id="Category">
            {categories.map((movie) => (
                <MovieRows {...movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieShelf;

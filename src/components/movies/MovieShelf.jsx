import Films from "./Films";

const MovieShelf = ({ categories }) => {
    return (
        <div className="category" id="Category">
            {categories.map((movie) => (
                <Films {...movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieShelf;

import { useMovie } from "../context/movie-hooks";
import Movie from "./Movies";

const Category = () => {
    const { data } = useMovie();

    return (
        <div style={{ display: "flex" }}>
            {data.map((movie) => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default Category;

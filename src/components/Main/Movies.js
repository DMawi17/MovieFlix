import { useMovie } from "../../context/movie-hooks";

const Movie = ({ title, poster_path }) => {
    const { IMG } = useMovie();

    return (
        <>
            <img id="Movies" src={IMG + poster_path} alt={title} />
        </>
    );
};

export default Movie;

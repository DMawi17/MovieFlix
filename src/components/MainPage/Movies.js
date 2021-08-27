import { useMovie } from "../../context/movie-hooks";

const Movie = ({
    title,
    vote_average,
    release_date,
    poster_path,
    overview,
    name,
}) => {
    const { IMG } = useMovie();

    return (
        <>
            <img id="poster" src={IMG + poster_path} alt={title} />
        </>
    );
};

export default Movie;

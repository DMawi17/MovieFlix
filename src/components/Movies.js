import { useMovie } from "../context/movie-hooks";

const Movie = ({
    title,
    vote_average,
    release_date,
    poster_path,
    overview,
}) => {
    const { IMG } = useMovie();

    return (
        <div>
            <img
                src={IMG + poster_path}
                width="150"
                height="200"
                alt={title}
                style={{ margin: 10 }}
            />
            <h2>Title: {title}</h2>
            <h4>Release Date: {release_date}</h4>
            <p>{overview}</p>
            <h5>Ratings: {vote_average}</h5>
        </div>
    );
};

export default Movie;

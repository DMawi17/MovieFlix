import { useMovie } from "../../helpers/movie-hooks";
import { FaHeart, FaPlay, FaStar } from "react-icons/fa";

function MovieColls({
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
    // runtime,
}) {
    const { IMG_URL, truncate, releaseYear } = useMovie();

    return (
        <div className="movie__colls">
            <img
                className="movie__img"
                src={IMG_URL + poster_path}
                alt={title}
            />
            <div className="movie__info info-box">
                <div className="movie__info-title">
                    {truncate(name, 15) || truncate(title, 15)}
                </div>
                <div className="movie__info-extra">
                    <div className="movie__info-date">
                        {releaseYear(release_date) ||
                            releaseYear(first_air_date)}
                    </div>
                    <div className="movie__info-rating">
                        <p>
                            <FaStar className="rating-star" />
                        </p>
                        <p>{vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieColls;

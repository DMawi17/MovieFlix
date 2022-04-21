import { useMovie } from "../../helpers/movie-hooks";
import { FaStar } from "react-icons/fa";
import MovieCard from "../cards/MovieCard";

function MovieColls(item) {
    console.log(item);

    const { IMG_URL, truncate, releaseYear } = useMovie();
    const {
        poster_path,
        title,
        name,
        release_date,
        first_air_date,
        vote_average,
        runtime,
        episode_run_time,
    } = item;

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
                        {release_date && releaseYear(release_date)}
                        {first_air_date && releaseYear(first_air_date)}
                        <span className="card__runtime">
                            {(runtime && `${runtime} min`) ||
                                (episode_run_time && `${episode_run_time} min`)}
                        </span>
                    </div>
                    <div className="movie__info-rating">
                        <p>
                            <FaStar className="rating-star" />
                        </p>
                        <p>{vote_average}</p>
                    </div>
                </div>
            </div>
            <MovieCard {...item} />
        </div>
    );
}

export default MovieColls;

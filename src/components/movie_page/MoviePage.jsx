import { useMovie } from "../../helpers/movie-hooks";
import { FaStar } from "react-icons/fa";

function MoviePages({ props }) {
    const { IMG_URL, truncate, releaseYear } = useMovie();

    return (
        <>
            <div className="movie__page">
                {props?.map((item) =>
                    item.map((movie) => (
                        <div key={movie.id} className="movie__colls">
                            <img
                                className="movie__img"
                                src={IMG_URL + movie.poster_path}
                                alt={movie.title}
                            />
                            <div className="movie__info info-box">
                                <div className="movie__info-title">
                                    {truncate(movie.name, 15) ||
                                        truncate(movie.title, 15)}
                                </div>
                                <div className="movie__info-extra">
                                    <div className="movie__info-date">
                                        {movie.release_date &&
                                            releaseYear(movie.release_date)}
                                        {movie.first_air_date &&
                                            releaseYear(movie.first_air_date)}
                                        <span className="card__runtime">
                                            {(movie.runtime &&
                                                `${movie.runtime} min`) ||
                                                (movie.episode_run_time &&
                                                    `${movie.episode_run_time} min`)}
                                        </span>
                                    </div>
                                    <div className="movie__info-rating">
                                        <p>
                                            <FaStar className="rating-star" />
                                        </p>
                                        <p>{movie.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default MoviePages;

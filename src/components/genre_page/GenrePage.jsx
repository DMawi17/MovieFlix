import { useMovie } from "../../helpers/movie-hooks";
import { FaStar } from "react-icons/fa";

function GenrePages({ props }) {
    const { IMG_URL, truncate, releaseYear } = useMovie();

    return (
        <>
            <div className="movie__shelf-heading">{props.heading}</div>
            <div className="movie__page">
                {props.genres?.map((item) => (
                    <div key={item.id} className="movie__colls">
                        <img
                            className="movie__img"
                            src={IMG_URL + item.poster_path}
                            alt={item.title}
                        />
                        <div className="movie__info info-box">
                            <div className="movie__info-title">
                                {truncate(item.name, 15) ||
                                    truncate(item.title, 15)}
                            </div>
                            <div className="movie__info-extra">
                                <div className="movie__info-date">
                                    {item.release_date &&
                                        releaseYear(item.release_date)}
                                    {item.first_air_date &&
                                        releaseYear(item.first_air_date)}
                                    <span className="card__runtime">
                                        {(item.runtime &&
                                            `${item.runtime} min`) ||
                                            (item.episode_run_time &&
                                                `${item.episode_run_time} min`)}
                                    </span>
                                </div>
                                <div className="movie__info-rating">
                                    <p>
                                        <FaStar className="rating-star" />
                                    </p>
                                    <p>{item.vote_average}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default GenrePages;

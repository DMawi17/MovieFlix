import { FaStar, FaPlay, FaRegHeart } from "react-icons/fa";
import { v4 } from "uuid";
import { useMovie } from "../../helpers/movie-hooks";

function MovieCard({
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
    runtime,
    episode_run_time,
    overview,
    production_countries,
    genres,
}) {
    const { truncate, releaseYear } = useMovie();

    return (
        <section className="card__info">
            <h3 className="card__info-title">{name || title}</h3>

            <div className="card__info-extra">
                <span className="rating">
                    <FaStar className="icon-star" /> {vote_average}
                </span>
                <span className="card__date">
                    {release_date && releaseYear(release_date)}
                    {first_air_date && releaseYear(first_air_date)}
                </span>
                <span className="card__runtime">
                    {runtime ? `${runtime} min` : `${episode_run_time} min`}
                </span>
            </div>

            <p className="card__info-description">{truncate(overview)}</p>

            <div className="card__info-country">
                <p className="country-title">Country:</p>
                <ul className="country-list">
                    {production_countries.map((country) =>
                        country.iso_3166_1 === "US" ? (
                            <li className="genre-item" key={v4()}>
                                {country.iso_3166_1}
                            </li>
                        ) : (
                            <li className="genre-item" key={v4()}>
                                {country.name}
                            </li>
                        )
                    )}
                </ul>
            </div>

            <div className="card__info-genre">
                Genre:
                <ul className="card__info-genre-list">
                    {genres.map((genre) =>
                        genre.id === 878 ? (
                            <li className="genre-item" key={v4()}>
                                Sci-Fi
                            </li>
                        ) : (
                            <li className="genre-item" key={v4()}>
                                {truncate(genre.name)}
                            </li>
                        )
                    )}
                </ul>
            </div>

            <div className="card__info-buttons">
                <button className="button button-watch">
                    <FaPlay className="icon" />
                    Watch trailer
                </button>
                <button className="button button-love">
                    <FaRegHeart className="icon" />
                </button>
            </div>
        </section>
    );
}

export default MovieCard;

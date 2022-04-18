import { useMovie } from "../../helpers/movie-hooks";

function MovieColls({
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    runtime,
}) {
    const { IMG_BG_URL } = useMovie();

    return (
        <div className="movie__colls">
            <img
                className="movie__img"
                id="Films"
                src={IMG_BG_URL + poster_path}
                alt={title}
            />
            <div className="movie__info info-box">
                <div className="movie__info-title">{name || title}</div>
                <span className="movie__info-date">
                    {release_date || first_air_date}
                </span>
            </div>
        </div>
    );
}

export default MovieColls;

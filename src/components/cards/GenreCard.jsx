import { Link } from "react-router-dom";
import { useMovie } from "../../helpers/movie-hooks";
import { v4 } from "uuid";

function GenreCard() {
    const { genresList, fetchGenre } = useMovie();

    return (
        <section className="card__genre">
            <ul className="card__genre-list">
                {genresList.map((genre) => (
                    <li
                        onClick={() => {
                            fetchGenre(genre.id, genre.name);
                        }}
                        key={v4()}
                        className="card__genre-item"
                    >
                        <Link to="/genre">{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GenreCard;

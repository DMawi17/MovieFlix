import { Link } from "react-router-dom";
import { useMovie } from "../../helpers/movie-hooks";
import { v4 } from "uuid";

function GenreCard() {
    const { genresList, detailedGenreFetch } = useMovie();

    return (
        <section className="card__genre">
            <ul className="card__genre-list">
                {genresList.map((genre) => (
                    <li
                        onClick={() => {
                            detailedGenreFetch(genre.id, genre.name);
                        }}
                        key={v4()}
                        className="card__genre-item"
                    >
                        <Link to="/genre" className="card__genre-name">
                            {genre.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GenreCard;

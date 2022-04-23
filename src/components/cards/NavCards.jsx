import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { useMovie } from "../../helpers/movie-hooks";

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
                        <Link to="/genre">{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function CountryCard() {
    const { genres } = useMovie();

    return (
        <section className="card__genre">
            <ul className="card__genre-list">
                {genres.map((genre) => (
                    <li key={v4()} className="card__genre-item">
                        {genre.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export { GenreCard, CountryCard };

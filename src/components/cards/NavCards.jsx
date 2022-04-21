import { Link } from "react-router-dom";
import { useMovie } from "../../helpers/movie-hooks";

function GenreCard() {
    const { genres, fetchGenre } = useMovie();

    // console.log(fetchGenre([28, 12, 16]));
    // console.log(genres);

    return (
        <section className="card__genre">
            <ul className="card__genre-list">
                {genres.map((genre) => (
                    <li
                        onClick={() => fetchGenre(genre.id)}
                        key={genre.id}
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
                    <li className="card__genre-item">{genre.name}</li>
                ))}
            </ul>
        </section>
    );
}

export { GenreCard, CountryCard };

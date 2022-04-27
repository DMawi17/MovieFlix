import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../../helpers/movie-hooks";
import { v4 } from "uuid";

function GenreCard() {
    const { genresList, fetchDetailedGenre } = useMovie();

    useEffect(() => {
        fetchDetailedGenre();
    }, [fetchDetailedGenre]);

    return (
        <section className="card__genre">
            <ul className="card__genre-list">
                {genresList.map((genre) => (
                    <li
                        onClick={() => {
                            fetchDetailedGenre(genre.id, genre.name);
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

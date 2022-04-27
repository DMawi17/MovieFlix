import { useEffect } from "react";
import { Link } from "react-router-dom";
import GenreCard from "../components/cards/GenreCard";
import { useMovie } from "../helpers/movie-hooks";

const Nav = () => {
    const { fetchGenreList } = useMovie();

    useEffect(() => {
        fetchGenreList();
    }, [fetchGenreList]);

    return (
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/" className="nav__link">
                    Home
                </Link>
            </li>
            <li className="nav__item">
                <Link to="" className="nav__link genre">
                    Genre
                </Link>
                <GenreCard />
            </li>
            <li className="nav__item">
                <Link to="/movies" className="nav__link">
                    Movies
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/series" className="nav__link">
                    TV-Series
                </Link>
            </li>
        </ul>
    );
};

export default Nav;

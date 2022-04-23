import { Link } from "react-router-dom";
import GenreCard from "../components/cards/GenreCard";

const Nav = () => {
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
            <li className="nav__item">
                <Link to="/topImdb" className="nav__link">
                    Top IMDB
                </Link>
            </li>
        </ul>
    );
};

export default Nav;

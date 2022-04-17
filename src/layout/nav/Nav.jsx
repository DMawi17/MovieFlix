import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { v4 } from "uuid";

const NavBar = () => {
    const navElements = [
        { path: "/", link: "Home" },
        { path: "genre", link: "Genre" },
        { path: "country", link: "Country" },
        { path: "movies", link: "Movies" },
        { path: "tvShows", link: "TV-Series" },
        { path: "topImdb", link: "Top IMDB" },
    ];

    return (
        <div className="container">
            <nav className="nav">
                <Link to="/" className="nav__logo">
                    MovieSt.
                </Link>

                <ul className="nav__list">
                    {navElements.map((el) => (
                        <li key={v4()} className="nav__item">
                            <Link
                                to={`${el.path}`}
                                className={`nav__link nav__${el.path}`}
                            >
                                {el.link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div to="search" className="nav__search ">
                    <FaSearch className="nav__search-icon" />
                    <label htmlFor="" className="nav__search-label">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="nav__search-input"
                            placeholder="Enter your keywords..."
                        />
                    </label>
                </div>

                <div className="nav__login">
                    <BsPersonFill className="nav__login-icon" />
                    <Link className="nav__login-link" to="login">
                        Login / Register
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

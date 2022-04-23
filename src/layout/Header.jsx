import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { useMovie } from "../helpers/movie-hooks";
import Nav from "./Nav";

const Header = () => {
    const { handleToggleLogin, handleToggleMenu } = useMovie();

    return (
        <header className="header container">
            <div className="nav__wrapper">
                <nav className="nav">
                    <button
                        className="nav__btn nav__toggle"
                        id="nav_toggle"
                        onClick={handleToggleMenu}
                    >
                        <AiOutlineBars className="bars__icon" />
                    </button>

                    <Link to="/" className="nav__logo">
                        MovieSt
                    </Link>

                    <Nav />

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

                    <div className="nav__login" onClick={handleToggleLogin}>
                        <BsPersonCircle className="nav__login-icon " />
                        <Link className="nav__login-link nav__link" to="login">
                            Login / Register
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

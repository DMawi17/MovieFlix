import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { v4 } from "uuid";
import { useMovie } from "../helpers/movie-hooks";

const NavBar = () => {
    const { navElements, handleToggleMenu, handleToggleLogin } = useMovie();

    return (
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

                {/*   {toggleMenu && ( */}
                {/* <> */}
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
                {/* </> */}
                {/*      )} */}

                <div className="nav__login" onClick={handleToggleLogin}>
                    <BsPersonFill className="nav__login-icon" />
                    {/* {toggleLogin && ( */}
                    <Link className="nav__login-link" to="login">
                        Login / Register
                    </Link>
                    {/*      )} */}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

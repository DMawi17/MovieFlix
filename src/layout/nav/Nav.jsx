import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="logo">
                Movie<span>Stream</span>
            </Link>

            <ul className="nav_Links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="films">Genre</Link>
                </li>
                <li>
                    <Link to="series">Country</Link>
                </li>
                <li>
                    <Link to="series">Movies</Link>
                </li>
                <li>
                    <Link to="series">TV-Series</Link>
                </li>
                <li>
                    <Link to="series">TopIMDB</Link>
                </li>
                <div>
                    <Link to="search" className="search_Btn">
                        Search <FaSearch className="search_Icon" />
                    </Link>
                </div>
                <div>
                    <li>
                        <Link to="series">Login / Register</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;

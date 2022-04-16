import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {

    return (
        <div id="Nav">
            <Link to="/" id="Logo">
                Movie<span>Stream</span>
            </Link>

            <nav id="Nav_Links">
                <Link exact to="/">
                    Home
                </Link>
                <Link to="films">Movies</Link>
                <Link to="series">Series</Link>
                <Link to="search" id="Search_Btn">
                    Search <FaSearch id="Search_Icon" />
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;

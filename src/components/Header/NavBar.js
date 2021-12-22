import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
    const history = useHistory();

    const logout = () => {
        history.push("/");
    };

    return (
        <div id="Nav">
            <Link to="/home" id="Logo">
                movie<span>Flix</span>
            </Link>

            <nav id="Nav_Links">
                <Link exact to="/home">
                    Home
                </Link>
                <Link to="/films">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/search" id="Search_Btn">
                    Search <FaSearch id="Search_Icon"/>
                </Link>
            </nav>

            <div id="Avatar">
                <img
                    id="Avatar_Img"
                    src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
                    alt=""
                />

                <button id="Logout" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default NavBar;

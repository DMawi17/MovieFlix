import { FaGhost } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div id="Nav">
            <NavLink to="/" id="Logo">
                movie<span>Flix</span>
            </NavLink>
            <nav id="Nav_Links">
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink to="/films">Films</NavLink>
                <NavLink to="/series">Series</NavLink>
                <NavLink to="/mylist">My List</NavLink>
            </nav>
            <form>
                <input
                    type="text"
                    name=""
                    id="Search"
                    placeholder="Search..."
                />
            </form>
            <div id="Ghosty">
                <FaGhost />
            </div>
        </div>
    );
};

export default Nav;

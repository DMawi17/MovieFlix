import { NavLink, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
    const history = useHistory();

    const logout = () => {
        history.push("/");
    };

    //.. search 
    const handleChange = (e) => {
        
    }
    
    const find = () => {

    }

    //..

    return (
        <div id="Nav">
            <NavLink to="/home" id="Logo">
                movie<span>Flix</span>
            </NavLink>
            <nav id="Nav_Links">
                <NavLink exact to="/home">
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
                    onChange={handleChange}
                    onKeyDown={find}
                />
                <button id="Button" type="button">
                    <FaSearch />
                </button>
            </form>
            <div id="Avatar">
                <img
                    id="Avatar_Img"
                    src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
                    alt=""
                />

                <button id="Dropdown" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default NavBar;

import { FaGhost } from "react-icons/fa";

const Nav = () => {
    return (
        <div id="Nav">
            <h1 id="Logo">
                <a href="/">
                    movie<span>/>lix</span>
                </a>
            </h1>
            <ul id="Nav_Links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Films</a>
                </li>
                <li>
                    <a href="/">Series</a>
                </li>
                <li>
                    <a href="/">My List</a>
                </li>
            </ul>
            <form>
                <input
                    type="text"
                    name=""
                    id="Search"
                    placeholder="Search..."
                />
            </form>
            <a id="Ghosty" href="/">
                <FaGhost />
            </a>
        </div>
    );
};

export default Nav;

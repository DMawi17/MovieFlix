
import { FaSearch } from "react-icons/fa";
import { useMovie } from "../helpers/movie-hooks";
import SearchCard from "./cards/SearchCard";

const Search = () => {
    const {
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        fetchDetailedSearch,
    } = useMovie();

    const handleChange = (e) => {
        fetchDetailedSearch(e.target.value);
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <form className="nav__search ">
                <FaSearch className="nav__search-icon" />
                <label htmlFor="" className="nav__search-label">
                    <input
                        id="search"
                        value={searchTerm}
                        type="text"
                        name="search"
                        className="nav__search-input"
                        placeholder="Enter your keywords..."
                        onChange={handleChange}
                    />
                </label>

                <SearchCard
                    props={{
                        searchResults,
                        setSearchResults,
                        searchTerm,
                        setSearchTerm,
                    }}
                />
            </form>
        </>
    );
};

export default Search;

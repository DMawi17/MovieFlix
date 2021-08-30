import { useMovie } from "../../context/movie-hooks";
import MovieShelf from "../Main/MovieShelf";

const Search = () => {
    const { search, setSearch, genreUrls } = useMovie();

    // movies.map((movie) => console.log(movie.title));
    //   console.log(movies[3]);

    // const find = (search) => {
    //     return movies.filter(
    //         (movie) => movie.title.toLowerCase().indexOf(search) > -1
    //     );
    // };

    return (
        <div className="input">
            <input
                value={search}
                type="text"
                id="Search2"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                // onKeyDown={find}
            />
            <div id="Main">
                {genreUrls.map((url) => (
                    <MovieShelf fetchUrl={url.fetchUrl} key={url.title} />
                ))}
            </div>
        </div>
    );
};

export default Search;

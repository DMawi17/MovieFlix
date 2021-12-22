import MovieShelf from "./MovieShelf";
import { useMovie } from "../../context/movie-hooks";

/*

   _   _                      
  | | | | ___  _ __ ___   ___ 
  | |_| |/ _ \| '_ ` _ \ / _ \
  |  _  | (_) | | | | | |  __/
  |_| |_|\___/|_| |_| |_|\___|

*/

export const MainHome = () => {
    const { homeUrls } = useMovie();

    return (
        <div id="Main">
            <h2>NetflixOriginals</h2>
            <MovieShelf title="Trending" fetchUrl={homeUrls.NetflixOriginals} />
            <h2>Trending</h2>
            <MovieShelf
                title="Netflix Originals"
                fetchUrl={homeUrls.Trending}
            />

            <h2>TopRated</h2>
            <MovieShelf title="Trending" fetchUrl={homeUrls.TopRated} />
        </div>
    );
};

/*

   _____ _ _               
  |  ___(_) |_ __ ___  ___ 
  | |_  | | | '_ ` _ \/ __|
  |  _| | | | | | | | \__ \
  |_|   |_|_|_| |_| |_|___/
                           
 
*/

export const MainFilm = () => {
    const { genreUrls } = useMovie();

    return (
        <div id="Main">
            {genreUrls.map((url) => (
                <div key={url.fetchUrl}>
                    <h2>{url.title}</h2>
                    <MovieShelf fetchUrl={url.fetchUrl} />
                </div>
            ))}
        </div>
    );
};

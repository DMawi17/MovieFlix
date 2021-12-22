import FilmShelf from "./FilmShelf";
import { useMovie } from "../../context/movie-hooks";

// Render on Home page
export const MainHome = () => {
    const { homeUrls } = useMovie();

    return (
        <div id="Main">
            <h2>NetflixOriginals</h2>
            <FilmShelf title="Trending" fetchUrl={homeUrls.NetflixOriginals} />

            <h2>Trending</h2>
            <FilmShelf title="Netflix Originals" fetchUrl={homeUrls.Trending} />

            <h2>TopRated</h2>
            <FilmShelf title="Trending" fetchUrl={homeUrls.TopRated} />
        </div>
    );
};

// Render on Movies page
export const MainFilm = () => {
    const { genreUrls } = useMovie();

    return (
        <div id="Main">
            {genreUrls.map((url) => (
                <div key={url.fetchUrl}>
                    <h2>{url.title}</h2>
                    <FilmShelf fetchUrl={url.fetchUrl} />
                </div>
            ))}
        </div>
    );
};

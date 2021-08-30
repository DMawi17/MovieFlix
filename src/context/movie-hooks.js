import { createContext, useContext, useState, useEffect } from "react";
import { HomeUrls, GenreUrls, IMG_URL } from "../data/request";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [IMG] = useState(IMG_URL);
    const [homeUrls] = useState(HomeUrls);
    const [genreUrls] = useState(GenreUrls);
    const [filmGenre] = useState([]);
    const [bannerPic, setBannerPic] = useState([]);
    const [movies, setMovies] = useState([]);

    //.. Banner Effect
    useEffect(() => {
        async function fetchBanner() {
            const requestBanner = await fetch(homeUrls.NetflixOriginals).then(
                (res) => res.json()
            );
            setBannerPic(
                requestBanner.results[
                    Math.floor(Math.random() * requestBanner.results.length - 1)
                ]
            );
            return requestBanner;
        }
        fetchBanner();
    }, [homeUrls.NetflixOriginals]);

    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    //.. Search

    return (
        <MovieContext.Provider
            value={{
                IMG,
                homeUrls,
                genreUrls,
                bannerPic,
                setBannerPic,
                truncate,
                filmGenre,
                movies,
                setMovies,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

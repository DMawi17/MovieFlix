import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { HomeUrls, GenreUrls, IMG_URL } from "../api/request";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [IMG] = useState(IMG_URL);
    const [homeUrls] = useState(HomeUrls);
    const [genreUrls] = useState(GenreUrls);
    const [filmGenre] = useState([]);
    const [bannerPic, setBannerPic] = useState([]);
    const [movies, setMovies] = useState([]);

    console.log(IMG)

    //.. Banner Effect
    useEffect(() => {
        async function fetchBanner() {
            const requestBanner = await axios
                .get(homeUrls.NetflixOriginals)
                .then((res) => res.data.results);

            setBannerPic(
                requestBanner[
                    Math.floor(Math.random() * requestBanner.length - 1)
                ]
            );
        }
        fetchBanner();
    }, [homeUrls.NetflixOriginals]);

    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

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

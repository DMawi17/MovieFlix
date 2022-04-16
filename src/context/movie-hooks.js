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
    const [bannerData, setBannerData] = useState([]);
    const [movies, setMovies] = useState([]);

    //.. Banner Effect
    useEffect(() => {
        async function fetchBanner() {
            const requestBanner = await axios
                .get(homeUrls.popular)
                .then((res) => res.data.results);

            setBannerData(requestBanner);
        }
        fetchBanner();
    }, [homeUrls.popular]);

    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    return (
        <MovieContext.Provider
            value={{
                IMG,
                homeUrls,
                genreUrls,
                bannerData,
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

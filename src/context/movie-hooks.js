import { createContext, useContext, useState, useEffect } from "react";
import { HomeUrls, GenreUrls, IMG_URL } from "../data/request";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

//..
/* const test = "popular";

const API_KEY = "api_key=22bd54fac3b17dbd99833a3dd26f1d90";
const BASE_URL =
    "https://api.themoviedb.org/3/search/movie?" + API_KEY + "&query=" + test;
// const API_URL = BASE_URL + `/discover/movie?sort_by=${test}.desc&` + API_KEY;
// const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const IMG_URL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"; */

//.. Myway

// const API_KEY = "api_key=22bd54fac3b17dbd99833a3dd26f1d90";
// const BASE_URL = "https://api.themoviedb.org/3";
// const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

// const IMG_URL = "https://image.tmdb.org/t/p/w500";
//..

export const MovieProvider = ({ children }) => {
    const [IMG] = useState(IMG_URL);
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);
    const [homeUrls, setHomeUrls] = useState(HomeUrls);
    const [genreUrls, setGenreUrls] = useState(GenreUrls);
    const [bannerPic, setBannerPic] = useState([]);
    const [filmGenre, setFilmGenre] = useState([]);

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

    //.. Main Home

    //..
    const length = data.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    //..

    return (
        <MovieContext.Provider
            value={{
                IMG,
                data,
                setData,
                current,
                setCurrent,
                prevSlide,
                nextSlide,
                homeUrls,
                genreUrls,
                bannerPic,
                setBannerPic,
                truncate,
                setHomeUrls,
                setGenreUrls,
                filmGenre,
                setFilmGenre,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

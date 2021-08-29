import { createContext, useContext, useState, useEffect } from "react";
import { HomeUrls, GenreUrls, IMG_URL } from "../data/request";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [IMG] = useState(IMG_URL);
    // const [data, setData] = useState([]);
    const [homeUrls, setHomeUrls] = useState(HomeUrls);
    const [genreUrls, setGenreUrls] = useState(GenreUrls);
    const [bannerPic, setBannerPic] = useState([]);
    const [filmGenre, setFilmGenre] = useState([]);
    const [search, setSearch] = useState([]);
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

    //.. Home Effect

    // const fetchUrl = genreUrls.map(url => url.fetchUrl)


    // useEffect(() => {
    //     async function fetchData() {
    //         const req = await fetch(fetchUrl).then((res) => res.json());
    //         setMovies(req.results);
    //         return req;
    //     }
    //     fetchData();
    // }, [fetchUrl]);

    return (
        <MovieContext.Provider
            value={{
                IMG,
                // data,
                // setData,
                homeUrls,
                genreUrls,
                bannerPic,
                setBannerPic,
                truncate,
                setHomeUrls,
                setGenreUrls,
                filmGenre,
                setFilmGenre,
                search,
                setSearch,
                movies,
                setMovies,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

//..
/* const test = "popular";

const API_KEY = "api_key=22bd54fac3b17dbd99833a3dd26f1d90";
const BASE_URL =
    "https://api.themoviedb.org/3/search/movie?" + API_KEY + "&query=" + test;
// const API_URL = BASE_URL + `/discover/movie?sort_by=${test}.desc&` + API_KEY;
// const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const IMG_URL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"; */

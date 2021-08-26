import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

//..
const test = "The pianist";

const API_KEY = "api_key=22bd54fac3b17dbd99833a3dd26f1d90";
const BASE_URL =
    "https://api.themoviedb.org/3/search/movie?" + API_KEY + "&query=" + test;
// const API_URL = BASE_URL + `/discover/movie?sort_by=${test}.desc&` + API_KEY;
// const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const IMG_URL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

//..

export const MovieProvider = ({ children }) => {
    const [API] = useState(BASE_URL);
    const [IMG] = useState(IMG_URL);
    const [data, setData] = useState([]);
    const [test, setTest] = useState("");

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((json) => {
                setData(json.results);
            });
    }, [API]);

    console.log(BASE_URL);

    return (
        <MovieContext.Provider value={{ API, IMG, data, setData }}>
            {children}
        </MovieContext.Provider>
    );
};

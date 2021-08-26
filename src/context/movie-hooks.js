import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

//..

const API_KEY = "api_key=22bd54fac3b17dbd99833a3dd26f1d90";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

//..

export const MovieProvider = ({ children }) => {
    const [API] = useState(API_URL);
    const [IMG] = useState(IMG_URL);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((json) => {
                setData(json.results);
            });
    }, [API]);

    return (
        <MovieContext.Provider value={{ API, IMG, data, setData }}>
            {children}
        </MovieContext.Provider>
    );
};

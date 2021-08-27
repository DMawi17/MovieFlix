import { createContext, useContext, useState } from "react";
import { URLs } from "../data/request";

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

const IMG_URL = "https://image.tmdb.org/t/p/w500";
//..

export const MovieProvider = ({ children }) => {
    // const [API] = useState(API_URL);
    const [IMG] = useState(IMG_URL);
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);
    const [urls] = useState(URLs);

    // const [test, setTest] = useState("");

    /*    useEffect(() => {
           fetch(urls.Action)
               .then((res) => res.json())
               .then((json) => {
                   setData(json.results);
               });
       }, [urls]); */

    /*      useEffect(() => {
        let requests = urls.map((url) => fetch(url));
        Promise.all(requests)
            .then((res) => Promise.all(res.map((r) => r.json())))
            .then((d) => setData(d));
        // .then((data) => data.forEach((data) => setData(data)));
    }, [urls]);  */

    // console.log(data);

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
                urls,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

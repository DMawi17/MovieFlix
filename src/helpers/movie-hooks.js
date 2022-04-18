import { createContext, useContext } from "react";
import * as api from "../api";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const { IMG_BG_URL, media_type, queries } = api;

    return (
        <MovieContext.Provider value={{ IMG_BG_URL, media_type, queries }}>
            {children}
        </MovieContext.Provider>
    );
};

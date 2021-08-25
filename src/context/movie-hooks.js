import { createContext, useContext, useState } from "react";
import { movieData } from "../data/movieData";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [movie] = useState(movieData);

    return (
        <MovieContext.Provider value={{ movie }}>
            {children}
        </MovieContext.Provider>
    );
};

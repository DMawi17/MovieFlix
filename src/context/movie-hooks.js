import { createContext, useContext, useState } from "react";
import data from "../data/data";
// import { v4 } from "uuid";

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [movie] = useState(data);

    return (
        <MovieContext.Provider value={{ movie }}>
            {children}
        </MovieContext.Provider>
    );
};

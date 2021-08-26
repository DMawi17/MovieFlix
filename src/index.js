import React from "react";
import { render } from "react-dom";
import { MovieProvider } from "./context/movie-hooks";
import { UserProvider } from "./context/userContext";
import App from "./App";
//..
import { BrowserRouter as Router } from "react-router-dom";

render(
    <UserProvider>
        <MovieProvider>
            <Router>
                <App />
            </Router>
        </MovieProvider>
    </UserProvider>,
    document.getElementById("root")
);

import "./styles.scss";
import { render } from "react-dom";
import { MovieProvider } from "./context/movie-hooks";
import { UserProvider } from "./context/userContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

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

import "./styles.scss";
import { render } from "react-dom";
import { MovieProvider } from "./context/movie-hooks";
import { UserProvider } from "./context/userContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
//..
import MoviePage from "./components/MoviePage/MoviePage";

render(
    <UserProvider>
        <MovieProvider>
            <Router>
                <App />
                {/* <MoviePage /> */}
            </Router>
        </MovieProvider>
    </UserProvider>,
    document.getElementById("root")
);

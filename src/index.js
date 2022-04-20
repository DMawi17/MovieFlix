import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieProvider } from "./helpers/movie-hooks";
import App from "./core/App";
import "./scss/styles.scss";

const rootElement = document.getElementById("root");

render(
    <MovieProvider>
        <Router>
            <App />
        </Router>
    </MovieProvider>,
    rootElement
);

import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { MovieProvider } from "./context/movie-hooks";
import App from "./components/App/App";
import "./styles.scss";

const rootElement = document.getElementById("root");

render(
    <UserProvider>
        <MovieProvider>
            <Router>
                <App />
            </Router>
        </MovieProvider>
    </UserProvider>,
    rootElement
);

// import "./style.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import MoviePage from "./components/MoviePage/MoviePage";
import Whoops404 from "./components/Whoops404";

function App() {
    return (
        <div className="App">
            <Home />
            <Switch>
                <Route path="/movie-page" component={MoviePage} />
                <Route path="*" component={Whoops404} />
            </Switch>
        </div>
    );
}

export default App;

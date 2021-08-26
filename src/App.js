import "./style.css";
// import Home from "./components/Home";
// import { Route, Switch } from "react-router-dom";
// import MoviePage from "./components/MoviePage/MoviePage";
// import Whoops404 from "./components/Whoops404";
import Main from './components/Main';

function App() {
    return (
        <div className="App">
            <Main/>
            {/* <Home />
            <Switch>
                <Route path="/movie-page" component={MoviePage} />
                <Route path="*" component={Whoops404} />
            </Switch> */}
        </div>
    );
}

export default App;

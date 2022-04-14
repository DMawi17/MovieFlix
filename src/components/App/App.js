import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import SearchList from "../../pages/Search";
import Whoops404 from "../../pages/Whoops404";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/films" component={Movies} />
                <Route path="/series" component={Series} />
                <Route path="/search" component={SearchList} />
                <Route path="*" component={Whoops404} />
            </Switch>
        </div>
    );
}

export default App;

import { Redirect, Route, Switch } from "react-router-dom";
import { useUser } from "../../context/userContext";
import Login from "../Access/Login";
import SignUp from "../Access/SignUp";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import SearchList from "../../pages/Search";
import Whoops404 from "../../pages/Whoops404";
import "./App.scss";

function App() {
    const { user } = useUser();

    return (
        <div className="App">
            {user && <Redirect from="/" to="/home" />}
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/films" component={Movies} />
                <Route path="/series" component={Series} />
                <Route path="/search" component={SearchList} />
                <Route path="/signup" component={SignUp} />
                <Route path="*" component={Whoops404} />
            </Switch>
        </div>
    );
}

export default App;

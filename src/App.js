import { Redirect, Route, Switch } from "react-router-dom";
import { useUser } from "./context/userContext";
import Login from "./components/Access/Login";
import SignUp from "./components/Access/SignUp";
import Home from "./components/pages/Home";
import Films from "./components/pages/Films";
import Series from "./components/pages/Series";
import MyList from "./components/pages/MyList";
import Whoops404 from "./components/pages/Whoops404";

function App() {
    const { user } = useUser();

    return (
        <div className="App">
            <Switch>
                {user && <Redirect from="/" to="/home" />}
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/films" component={Films} />
                <Route path="/series" component={Series} />
                <Route path="/mylist" component={MyList} />
                <Route path="/signup" component={SignUp} />
                <Route path="*" component={Whoops404} />
            </Switch>
        </div>
    );
}

export default App;

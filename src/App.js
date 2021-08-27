import { Route, Switch } from "react-router-dom";
import Nav from "./components/Header/Nav";
import Banner from "./components/Header/Banner";
import Films from "./components/pages/Films";
import Series from "./components/pages/Series";
import MyList from "./components/pages/MyList";
import Home from "./components/Home";

function App() {
    // const { user } = useUser();
    // const auto = "d@ex.de";

    return (
        <div className="App">
            <Nav />
            {/* <Banner /> */}
            <Switch>
                <Route>
                    {/* <Route path="/" component={} /> */}
                    <Route path="/films" component={Films} />
                    <Route path="/series" component={Series} />
                    <Route path="/mylist" component={MyList} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

/* <Switch>
                {user && <Route path="/" component={Home} />}
                {!user && <Route path="/signup" component={SignUp} />}
                {!user && <Route path="/" component={Login} />}
                <Route path="/moviepage" component={MoviePage} />
                <Route path="*" component={Whoops404} />
            </Switch> */

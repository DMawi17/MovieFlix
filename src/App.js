// import "./style.css";
import "./styles.scss"

import Home from "./components/Home";
// import { Route, Switch } from "react-router-dom";
// import MoviePage from "./components/MoviePage/MoviePage";
// import Whoops404 from "./components/Whoops404";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import { useUser } from "./context/userContext";

function App() {
    // const { user } = useUser();

    return (
        <div className="App">
            <Home />
            {/* <Switch>
                {user && <Route path="/" component={Home} />}
                {!user && <Route path="/signup" component={SignUp} />}
                {!user && <Route path="/" component={Login} />}
                <Route path="/moviepage" component={MoviePage} />
                <Route path="*" component={Whoops404} />
            </Switch> */}
        </div>
    );
}

export default App;

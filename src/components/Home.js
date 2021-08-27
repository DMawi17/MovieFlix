import Nav from "./Header/Nav";
// import "../style.css";
import "../styles.scss";
import Banner from "./Header/Banner";
import SignUp from "./SignUp";
import Main from "./MainPage/Main";
// import Films from "./pages/Films";
// import Series from "./pages/Series";
// import MyList from "./pages/MyList";

// import { Switch, Route, Redirect } from "react-router-dom";

const Home = (/* { auto } */) => {
    // if (auto) {
    //     return <Redirect to="/login" />;
    // }

    return (
        <div id="Home">
            <SignUp />

            {/*
            <Switch>
                <Route>
                    <Route path="/films" component={Films} />
                    <Route path="/series" component={Series} />
                    <Route path="/mylist" component={MyList} />
                </Route>
            </Switch> */}
        </div>
    );
};

export default Home;

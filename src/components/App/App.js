import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import SearchList from "../../pages/Search";
import Whoops404 from "../../pages/Whoops404";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/films" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/search" element={<SearchList />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import SearchList from "../components/search/Search";
import Whoops404 from "../pages/Whoops404";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="films" element={<Movies />} />
                <Route path="series" element={<Series />} />
                <Route path="search" element={<SearchList />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    );
}

export default App;

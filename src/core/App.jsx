import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Genre from "../pages/Genre";
import Country from "../pages/Country";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Imdb from "../pages/Imdb";
import Whoops404 from "../pages/Whoops404";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/genre" element={<Genre />} />
                <Route path="/country" element={<Country />} />
                <Route path="movies" element={<Movies />} />
                <Route path="series" element={<Series />} />
                <Route path="topImdb" element={<Imdb />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    );
}

export default App;

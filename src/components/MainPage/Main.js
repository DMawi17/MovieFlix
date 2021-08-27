import Category from "./Categories";
import Nav from "../Header/Nav";
import Banner from "../Header/Banner";

import { useMovie } from "../../context/movie-hooks";

const Main = () => {
    const { urls } = useMovie();

    return (
        <div id="Main">
            <Nav />
            <Banner />

            <section id="row">
                <h2>Trending</h2>
                <Category title="Netflix Originals" fetchUrl={urls.Trending} />
                <h2>NetflixOriginals</h2>
                <Category title="Trending" fetchUrl={urls.NetflixOriginals} />
                <h2>TopRated</h2>
                <Category title="Trending" fetchUrl={urls.TopRated} />
                <h2>Action</h2>
                <Category title="Trending" fetchUrl={urls.Action} />
                <h2>Comedy</h2>
                <Category title="Trending" fetchUrl={urls.Comedy} />
                <h2>Horror</h2>
                <Category title="Trending" fetchUrl={urls.Horror} />
                <h2>Family</h2>
                <Category title="Trending" fetchUrl={urls.Family} />
                <h2>Documentary</h2>
                <Category title="Trending" fetchUrl={urls.Documentary} />
            </section>
        </div>
    );
};

export default Main;

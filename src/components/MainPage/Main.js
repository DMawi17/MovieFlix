import Category from "./Categories";

import { useMovie } from "../../context/movie-hooks";

const Main = () => {
    const { urls } = useMovie();

    return (
        <div id="Main">
            <section id="row">
                <Category title="Netflix Originals" fetchUrl={urls.Trending} />
                <Category title="Trending" fetchUrl={urls.NetflixOriginals} />
            </section>
        </div>
    );
};

export default Main;

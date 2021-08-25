import Movies from "./Movies";

import { useMovie } from "../context/movie-hooks";

const Category = () => {
    const { movie } = useMovie();

    return <div>{movie.map((m) => m.movie.map((o) => <Movies {...o} />))}</div>;
};

export default Category;

import Movies from "./Movies";
import { v4 } from "uuid";
import { useMovie } from "../context/movie-hooks";

const Category = () => {
    const { movie } = useMovie();

    return (
        <div>
            {/* {movie.map((m) =>
                m.movie.map((o) => <Movies {...o} key={v4()} />)
            )} */}
            <Movies/>
            <Movies/>

        </div>
    );
};

export default Category;

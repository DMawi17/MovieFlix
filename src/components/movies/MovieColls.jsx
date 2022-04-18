// import { useMovie } from "../../helpers/movie-hooks";
import * as api from "../../api";

const MovieColls = ({ title, poster_path }) => {
    return (
        <div className="movie__colls">
            <img id="Films" src={api.IMG_BG_URL + poster_path} alt={title} />
        </div>
    );
};

export default MovieColls;

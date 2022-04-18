// import { useMovie } from "../../helpers/movie-hooks";
import * as api from "../../api";

const Films = ({ title, poster_path }) => {
    return <img id="Films" src={api.IMG_BG_URL + poster_path} alt={title} />;
};

export default Films;

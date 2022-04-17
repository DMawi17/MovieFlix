import { useMovie } from "../../helpers/movie-hooks";

const Films = ({ title, poster_path }) => {
    const { IMG } = useMovie();

    return <img id="Films" src={IMG + poster_path} alt={title} />;
};

export default Films;

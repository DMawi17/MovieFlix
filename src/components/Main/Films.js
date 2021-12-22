import { useMovie } from "../../context/movie-hooks";

const Films = ({ title, poster_path }) => {
    const { IMG } = useMovie();

    return <img id="Films" src={IMG + poster_path} alt={title} />;
};

export default Films;

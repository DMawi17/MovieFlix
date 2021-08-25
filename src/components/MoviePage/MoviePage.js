import MoviePlayer from "./MoviePlayer";
import HeaderCard from "../Header/HeaderCard";

const MoviePage = () => {
    return (
        <div className="d-flex flex-column" style={{ background: "#212529" }}>
            <HeaderCard />
            <MoviePlayer />
        </div>
    );
};

export default MoviePage;

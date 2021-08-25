import MoviePlayer from "./MoviePlayer";
import HeaderCard from "../Header/HeaderCard";
import Footer from "../Footer";

const MoviePage = () => {
    return (
        <div className="d-flex flex-column" style={{ background: "#212529" }}>
            <HeaderCard />
            <MoviePlayer />
            <Footer />
        </div>
    );
};

export default MoviePage;

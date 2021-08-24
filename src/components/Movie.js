import { useMovie } from "../context/movie-hooks";
//..
// import Cryptozoo from "../Img/Cryptozoo.jpg";
// import Demonic from "../Img/Demonic.jpg";
// import Reminiscence from "../Img/Reminiscence.jpg";
// import SnakeEyes from "../Img/Snake-Eyes.jpg";
import Vivo from "../Img/Vivo.jpg";

const Movie = () => {
    const { movie } = useMovie();
    console.log(movie[0].movie[0].image);

    return (
        <div>
            {/* {movie[0].movie[0].image} */}
            {Vivo}
        </div>
    );
};

export default Movie;

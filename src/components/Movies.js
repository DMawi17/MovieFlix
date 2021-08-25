import Cryptozoo from "../Img/Cryptozoo.jpg";
import Demonic from "../Img/Demonic.jpg";
import Reminiscence from "../Img/Reminiscence.jpg";
import SnakeEyes from "../Img/Snake-Eyes.jpg";
import Vivo from "../Img/Vivo.jpg";

const gallery = [Cryptozoo, Demonic, Reminiscence, SnakeEyes, Vivo];

const Movie = ({ title }) => {
    const movieTitle = title.split("-").join(" ");

    return (
        <div>
            {gallery.map((pic) => (
                <>
                    <img
                        src={pic}
                        width="150"
                        height="200"
                        alt={movieTitle}
                        style={{ margin: 10 }}
                    />
                    <h3>{movieTitle}</h3>
                </>
            ))}
        </div>
    );
};

export default Movie;

import { useMovie } from "../../context/movie-hooks";
import { GrAdd } from "react-icons/gr";

const TvShow = () => {
    const { bannerPic, truncate, backdrop_path } = useMovie();

    return (
        <div
            id="TvShows"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerPic?.backdrop_path}"`,
                backgroundPosition: "center center",
            }}
        >
            <div id="Banner_Contents2">
                <h1 id="Banner_Title2">{bannerPic?.original_name}</h1>
                <div>
                    <button disabled className="Play2">
                        Horror
                    </button>
                    <button disabled className="Play2">
                        Comedy
                    </button>
                </div>
                <h1 id="Banner_Description2">
                    {truncate(bannerPic?.overview)}
                </h1>
                <button className="Banner_Buttons2 Play2">Play</button>
            </div>
        </div>
    );
};

export default TvShow;

import { useMovie } from "../../context/movie-hooks";

const Banner = () => {
    const { bannerPic, truncate } = useMovie();

    return (
        <header
            id="Banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerPic?.backdrop_path}"`,
                backgroundPosition: "center center",
            }}
        >
            <div id="Banner_Contents">
                <h1 id="Banner_Title">{bannerPic?.original_name}</h1>
                <div>
                    <button className="Banner_Buttons Play">Play</button>
                    <button className="Banner_Buttons List">My List</button>
                </div>
                <h1 id="Banner_Description">{truncate(bannerPic?.overview)}</h1>
            </div>
            <div id="Banner_FadeBottom"></div>
        </header>
    );
};

export default Banner;

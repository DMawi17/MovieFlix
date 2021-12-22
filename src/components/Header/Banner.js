import { useMovie } from "../../context/movie-hooks";

const Banner = () => {
    const { bannerPic, truncate } = useMovie();

    return (
        <header
            id="Banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerPic?.backdrop_path}"`,
            }}
        >
            <div id="Banner_Contents">
                <h1 id="Banner_Title">{bannerPic?.original_name}</h1>
                <button className="Banner_Buttons Play">Play</button>
                <button className="Banner_Buttons List">My List</button>
                <p id="Banner_Description">{truncate(bannerPic?.overview)}</p>
            </div>
            <div id="Banner_FadeBottom"></div>
        </header>
    );
};

export default Banner;

import { useMovie } from "../../context/movie-hooks";

const TvShow = () => {
    const { bannerPic } = useMovie();

    return (
        <div id="TvShows">
            <div
                id="Banner_Contents2"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerPic?.backdrop_path}"`,
                    backgroundPosition: "center center",
                }}
            >
                <div id="Message">
                    <h1 id="Banner_Title2">
                        We've got something special in store for you.{" "}
                        <span>
                            And we can't wait for you to see it Please check
                            back soon.
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TvShow;

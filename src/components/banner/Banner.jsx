import { FaHeart, FaPlay, FaStar } from "react-icons/fa";
import { v4 } from "uuid";
import { useMovie } from "../../helpers/movie-hooks";

const Banner = ({ bannerInfo }) => {
    const { truncate, IMG_URL, img_size } = useMovie();
    const {
        backdrop_path,
        original_title,
        release_date,
        vote_average,
        runtime,
        genres,
        overview,
    } = bannerInfo;

    const bg_image = `url(${IMG_URL}${img_size.l}${backdrop_path}`;

    return (
        <div
            className="banner"
            id="Banner"
            style={{
                backgroundImage: bg_image,
            }}
        >
            <div className="banner__content" id="Banner_Contents">
                <div className="banner__info-container">
                    <h1 className="banner__title" id="Banner_Title">
                        {original_title}
                    </h1>

                    <div className="tags">
                        <span className="tag tag-date">{release_date}</span>
                        <span className="tag tag-rate">
                            <FaStar className="banner__icons icon-star" />{" "}
                            {vote_average}
                        </span>{" "}
                        <span className="tag tag-runtime">{runtime} min</span>
                        <div className="tag tag-genres">
                            {genres.map((genre) => (
                                <span className="tag-genre" key={v4()}>
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="banner__description" id="Banner_Description">
                        {truncate(overview)}
                    </p>

                    <div className="banner__buttons">
                        <button className="banner__button banner__button-play">
                            <FaPlay className="banner__icons" /> Watch now
                        </button>
                        <button className="banner__button banner__button-list">
                            <FaHeart className="banner__icons" /> Add to list
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

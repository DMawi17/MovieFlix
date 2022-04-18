import { useState, useEffect } from "react";
import { FaHeart, FaPlay, FaStar } from "react-icons/fa";
import * as api from "../../api";

const Banner = ({ id }) => {
    const [value, setValue] = useState({});
    const [genres, setGenres] = useState([]);

    // Fetch the detail of the individual banner item and set the data to value and set the data.genres to genres.
    useEffect(
        () =>
            api.fetchDetails(id).then((res) => {
                setValue(res.data);
                setGenres(res.data.genres);
            }),
        [id]
    );

    // Truncate the description of the banner.
    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    // Background img
    const bg_image = `url(${api.IMG_BG_URL}${value.backdrop_path}`;

    return (
        <div
            className="banner"
            id="Banner"
            style={{
                backgroundImage: bg_image,
            }}
        >
            <div className="banner__content" id="Banner_Contents">
                <h1 className="banner__title" id="Banner_Title">
                    {value.original_title}
                </h1>

                <div className="tags">
                    <span className="tag tag-date">{value.release_date}</span>
                    <span className="tag tag-rate">
                        <FaStar /> {value.vote_average}
                    </span>{" "}
                    <span className="tag tag-runtime">{value.runtime} min</span>
                    <div className="tag tag-genres">
                        {genres.map((genre) => (
                            <span className="tag-genre" key={genre.id}>
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>

                <p className="banner__description" id="Banner_Description">
                    {truncate(value.overview)}
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
    );
};

export default Banner;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaPlay, FaStar } from "react-icons/fa";

import { useMovie } from "../context/movie-hooks";

const Banner = ({ id }) => {
    const [value, setValue] = useState({});
    const [genres, setGenres] = useState([]);
    const { truncate } = useMovie();

    const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;
    const API_BASE_URL = "https://api.themoviedb.org/3";
    const IMG_BG_URL = "https://image.tmdb.org/t/p/original/";
    const detailURL = `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchDetails = async () => {
            const requestDetails = await axios
                .get(detailURL)
                .then((res) => res.data);

            setGenres(requestDetails.genres);
            setValue(requestDetails);
        };

        fetchDetails();
    }, []);

    return (
        <div
            className="banner"
            id="Banner"
            style={{
                backgroundImage: `url(${IMG_BG_URL}${value.backdrop_path}`,
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

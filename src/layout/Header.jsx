import { useState, useEffect } from "react";
import Nav from "./Nav";
import BannerSwiper from "../components/banner/BannerSwiper";
import * as api from "../api";
import { useMovie } from "../helpers/movie-hooks";

const Header = () => {
    const [bannerData, setBannerData] = useState([]);
    const { media_type, queries } = useMovie();

    // Fetch 20 popular movies for the banner.
    useEffect(
        () =>
            api
                .fetchMovies(media_type.movie, queries.popular)
                .then((res) => setBannerData(res.data.results)),
        [media_type.movie, queries.popular]
    );

    // Sort the data from the hights rating and filter the top 10 out.
    const tenBanners = bannerData
        .sort((a, b) => b.vote_average - a.vote_average)
        .filter((v, i) => i < 10);

    return (
        <header className="header container">
            <Nav />
            <BannerSwiper tenBanners={tenBanners} />
        </header>
    );
};

export default Header;

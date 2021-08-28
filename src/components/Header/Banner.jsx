import { useEffect, useState } from "react";
import { useMovie } from "../../context/movie-hooks";

const Banner = () => {
    const { urls } = useMovie();
    const [movies, setMovies] = useState([]);

    const fetchUrl = urls.NetflixOriginals;

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(fetchUrl).then((res) => res.json());
            setMovies(
                req.results[Math.floor(Math.random() * req.results.length - 1)]
            );
            return req;
        }
        fetchData();
    }, [fetchUrl]);

    const truncate = (str, maxLength = 150) => {
        return str?.length > maxLength ? str.slice(0, maxLength) + `…` : str;
    };

    return (
        <header
            id="Banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"`,
                backgroundPosition: "center center",
            }}
        >
            <div id="Banner_Contents">
                <h1 id="Banner_Title">{movies?.original_name}</h1>
                <div>
                    <button className="Banner_Buttons Play">Play</button>
                    <button className="Banner_Buttons List">My List</button>
                </div>
                <h1 id="Banner_Description">{truncate(movies?.overview)}</h1>
            </div>
            <div id="Banner_FadeBottom"></div>
        </header>
    );
};

export default Banner;

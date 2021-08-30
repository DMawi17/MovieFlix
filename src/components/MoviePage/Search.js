import { useState, useEffect } from "react";
import { useMovie } from "../../context/movie-hooks";

const Search = () => {
    const { genreUrls, IMG } = useMovie();
    const [films, setFilms] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    const searchUrl = genreUrls.map((url) => url.fetchUrl);

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(searchUrl).then((res) => res.json());
            setFilms(req.results);
            return req;
        }
        fetchData();
    }, [searchUrl]);

    const search = (s) => {
        return s.filter((v) => v.title.toLowerCase().indexOf(searchTerm) > -1);
    };

    console.log(films);

    return (
        <div id="New_Search">
            <input
                id="New_Input"
                value={searchTerm}
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div id="Search_Res">
                {search(films).map((film) => (
                    <img
                        id="Res_Img"
                        src={IMG + film.poster_path}
                        alt={film.title}
                    />
                ))}
                {/*  */}
            </div>
        </div>
    );
};

export default Search;

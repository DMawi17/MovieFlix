import axios from "axios";
import { useState, useEffect } from "react";
import { useMovie } from "../../context/movie-hooks";

const SearchFunc = () => {
    const { genreUrls, IMG } = useMovie();
    const [films, setFilms] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    useEffect(() => {
        async function fetchData() {
            return await axios(genreUrls[0].fetchUrl)
                .then((res) => setFilms(res.data.results))
                .catch((err) => console.log(err));
        }
        fetchData();
    }, [genreUrls, searchTerm]);

    const search = (s) => {
        return s.filter((v) => v.title.toLowerCase().indexOf(searchTerm) > -1);
    };

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
            </div>
        </div>
    );
};

export default SearchFunc;

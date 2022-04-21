import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w200";
const IMG_BG_URL = "https://image.tmdb.org/t/p/original";

// Discovery
// const GENRE_URL = "https://api.themoviedb.org/3/discover/";

//  https://api.themoviedb.org/3/genre/movie/list?api_key={{movieDB}}&language=en-US
// const GENRE_URL = "/genre/movie/list";

const media_type = { tv: "/tv", movie: "/movie" };
const time_window = { day: "/day", week: "/week" };
const queries = {
    id: "/id",
    popular: "/popular",
    search: "/search",
    img: "/images",
    top_rated: "/top_rated",
    recom: "/recommendations",
    playing: "/now_playing",
    on_air: "/on_the_air",
};

const client = axios.create({
    baseURL: API_BASE_URL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

const params = new URLSearchParams();
params.append("api_key", API_KEY);
params.append("language", "en-US");

const request = {
    params: params,
};

const fetchMovies = (mediaType, queryStr, params = request) => {
    return client.get(`${mediaType}${queryStr}`, params);
};

// const fetchDetail = (id, mediaType) => {
//     return client.get(`${mediaType}${id}`, {
//         params: { api_key: API_KEY },
//     });
// };

const fetchDetails = (mediaType, ids) => {
    return axios.all(
        ids.map((id) =>
            client.get(`${mediaType}/${id}`, {
                params: { api_key: API_KEY },
            })
        )
    );
};

// Discovery

const fetchGenreList = (params = request) => {
    return client.get("/genre/movie/list", params);
};

// https://api.themoviedb.org/3/discover/movie?api_key={{movieDB}}&with_genres=28

const fetchGenre = (mediaType, ids, params = request) => {
    return axios.all(
        ids.map((id) => {
            request.params.append("with_genres", id);
            return client.get(`/discover${mediaType}`, params);
        })
    );
};

export {
    API_KEY,
    API_BASE_URL,
    IMG_URL,
    IMG_BG_URL,
    media_type,
    time_window,
    queries,
    fetchMovies,
    // fetchDetail,
    fetchDetails,
    fetchGenreList,
    fetchGenre,
};

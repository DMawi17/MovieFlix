import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w200";
const IMG_BG_URL = "https://image.tmdb.org/t/p/original";

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
    headers: {
        "Content-Type": "application/json",
    },
});

const params = new URLSearchParams();
params.append("api_key", API_KEY);
params.append("language", "en-ES");
params.append("page", 2);

const request = {
    params: params,
};

const fetchMovies = (movieType, queriesStr, params = request) => {
    return client.get(`${movieType}${queriesStr}`, params);
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
};

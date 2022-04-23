import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w300";
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
    discover: "/discover",
};

/* ************************************************************************/

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

const endpoints = Array.from({ length: 2 }, (_, i) => i + 1);

/* ************************************************************************/

const fetchMovies = (mediaType, queryStr, params = request) => {
    return client.get(`${mediaType}${queryStr}`, params);
};

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

const fetchGenre = (mediaType, id, params = request) => {
    request.params.append("with_genres", id);
    return client.get(`/discover${mediaType}`, params);
};

const fetchMultipleGenre = (mediaType, id, params = request) => {
    request.params.append("with_genres", id);
    return axios.all(
        endpoints.map((endpoint) => {
            request.params.append("page", endpoint);
            return client.get(`/discover${mediaType}`, params);
        })
    );
};

// Fetch a few more pages:
const fetchMultiplePages = (mediaType, queryStr, params = request) => {
    return axios.all(
        endpoints.map((endpoint) => {
            request.params.append("page", endpoint);
            return client.get(`${mediaType}${queryStr}`, params);
        })
    );
};

/* ************************************************************************/

export {
    API_KEY,
    API_BASE_URL,
    IMG_URL,
    IMG_BG_URL,
    media_type,
    time_window,
    queries,
    fetchMovies,
    fetchDetails,
    fetchGenreList,
    fetchGenre,
    fetchMultiplePages,
    endpoints,
    fetchMultipleGenre,
};

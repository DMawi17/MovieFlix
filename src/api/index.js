import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p";

/* ************************************************************************/

const time_window = { day: "/day", week: "/week" };
const img_size = { s: "/w92", m: "/w154", l: "/original" };

const media_type = {
    tv: "/tv",
    movie: "/movie",
    multi: "/multi",
    person: "/person",
};

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
    headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
    },
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
    return client.get(mediaType + queryStr, params);
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key={{movieDB}}
// https://api.themoviedb.org/3/tv/{tv_id}?api_key={{movieDB}}
// https://api.themoviedb.org/3/person/{person_id}?api_key={{movieDB}}

// Fetch detail of a single movie/tv/person:
const fetchDetail = (mediaType, id, params = request) => {
    return client.get(`${mediaType}/${id}`, params);
};

// Fetch details of multiple movies/tvs/persons:
const fetchDetails = (mediaType, ids, params = request) => {
    return axios.all(ids.map((id) => client.get(`${mediaType}/${id}`, params)));
};

// Discovery
const fetchGenreList = (params = request) => {
    return client.get("/genre/movie/list", params);
};

const fetchMultipleGenre = (queries, mediaType, id, params = request) => {
    request.params.append("with_genres", id);
    return axios.all(
        endpoints.map((endpoint) => {
            request.params.append("page", endpoint);
            return client.get(queries + mediaType, params);
        })
    );
};

// Fetch a few more pages:
const fetchMultiplePages = (mediaType, queryStr, params = request) => {
    return axios.all(
        endpoints.map((endpoint) => {
            request.params.append("page", endpoint);
            return client.get(mediaType + queryStr, params);
        })
    );
};

// Search
const fetchSearch = (queries, mediaType, term, params = request) => {
    request.params.append("query", term);
    request.params.append("query", term);
    return client.get(queries + mediaType, params);
};

/* ************************************************************************/

export {
    API_KEY,
    API_BASE_URL,
    IMG_URL,
    img_size,
    media_type,
    time_window,
    queries,
    fetchMovies,
    fetchDetail,
    fetchDetails,
    fetchGenreList,
    fetchSearch,
    fetchMultiplePages,
    endpoints,
    fetchMultipleGenre,
};

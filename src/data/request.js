const API_KEY = "22bd54fac3b17dbd99833a3dd26f1d90";
const BASE_URL = "https://api.themoviedb.org/3";
// const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
// const IMG_URL = "https://image.tmdb.org/t/p/w500";

/* const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
]; */

export const URLs = {
    Trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-DE`,
    NetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    Action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    Comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    Horror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    Family: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    Documentary: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// export const URLs = [
// `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-DE`,
// `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
// `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
// `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
// `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
// `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`,
// `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
// ];

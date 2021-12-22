const BASE_URL = "https://api.themoviedb.org/3";
const GENRES = "/discover/movie?api_key=";
const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;
const GENRES_EXT = "&with_genres=";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";

const GENRES_CODE = [
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
];

export const GenreUrls = GENRES_CODE.map((gen) => ({
    title: gen.name,
    fetchUrl: `${BASE_URL}${GENRES}${API_KEY}${GENRES_EXT}${gen.id}`,
}));

export const HomeUrls = {
    Trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-DE`,
    NetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export const UserEndpoint = "http://localhost:3001/users";

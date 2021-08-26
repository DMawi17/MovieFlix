import { useMovie } from "../context/movie-hooks";

const Movie = () => {
    const { apiUrl } = useMovie();

    function getMovies(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                showMovies(data.results);
            });
    }
    getMovies(apiUrl);

    const showMovies = (data) => {
        data.map((movie) => {
            const { title, poster_path, vote_average, overview } = movie;
        //     console.log(title);
        //     console.log(poster_path);
        //     console.log(vote_average);
        //     console.log(overview);
        // });
    };

    return (
        <div>
            {/*  {getMovies(apiUrl).map((movie) => {
                const { title, poster_path, vote } = movie;

                <img
                    src={poster_path}
                    width="150"
                    height="200"
                    alt={movieTitle}
                    style={{ margin: 10 }}
                />;
            })} */}
        </div>
    );
};

export default Movie;

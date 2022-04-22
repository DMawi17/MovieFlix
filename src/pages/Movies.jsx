import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MovieColls from "../components/movies/MovieColls";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

const Movies = () => {
    const { multipleFetchMovies } = useMovie();

    // const newFetch = multipleFetchMovies.map((singleFetch) => {
    //     return singleFetch.data.results;
    // });

    // console.log(multipleFetchMovies);

    return (
        <section className="movies">
            <Header />

            <h1 className="movie__shelf-heading">Movies</h1>

            {/* {newFetch.map((arr) => (
                <div key={v4()} className="movie__rows">
                    {arr.map((movies) => (
                        // console.log(movies)
                        <MovieColls {...movies} key={movies.id} />
                    ))}
                </div> */}
            ))}

            <Footer />
        </section>
    );
};

export default Movies;

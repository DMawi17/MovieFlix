// import React, { useState, useEffect } from "react";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

// import Movie from "./Movies";

// const Category = ({ fetchUrl }) => {
//     const [movies, setMovies] = useState([]);
//     const [trailerUrl, setTrailerUrl] = useState("");

//     useEffect(() => {
//         async function fetchData() {
//             const req = await fetch(fetchUrl).then((res) => res.json());
//             setMovies(req.results);
//             return req;
//         }
//         fetchData();
//     }, [fetchUrl]);

//     //..
//     const opts = {
//         height: "390",
//         width: "100%",
//         playerVars: {
//             // https://developers.google.com/youtube/player_parameters
//             autoplay: 1,
//         },
//     };

//     const handleClick = (movies) => {
//         if (trailerUrl) {
//             setTrailerUrl("");
//         } else {
//             movieTrailer(movie?.name || "")
//                 .then((url) => {
//                     // https://www.youtube.com/watch?v=De38KIayYY4&ab_channel=SoothingRelaxation
//                     const urlParams = new URLSearchParams(new URL(url).search);
//                     setTrailerUrl(urlParams.get("v"));
//                 })
//                 .catch((error) => console.log(error));
//         }
//     };
//     //..
//     return (
//         <div id="Category">
//             {movies.map((movie, i) => (
//                 <Movie key={movie.id} {...movie} />
//             ))}
//             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//         </div>
//     );
// };

// export default Category;

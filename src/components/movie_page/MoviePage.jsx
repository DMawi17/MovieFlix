// import { useMovie } from "../../helpers/movie-hooks";
// import { FaStar } from "react-icons/fa";
// import Pagination from "../Pagination";

// function MoviePages({ poster_path, title, release_date, first_air_date, ru }) {
//     const {
//         loading,
//         IMG_URL,
//         truncate,
//         releaseYear,
//         currentPage,
//         moviesPerPage,
//     } = useMovie();

//     console.log(poster_path);

//     if (loading) {
//         return <h2 style={{ colo: "white" }}>Loading...</h2>;
//     }

//     const idxOfLastMovie = currentPage * moviesPerPage;
//     const idxOfFirstMovie = idxOfLastMovie - moviesPerPage;
//     const currentMovies = props.slice(idxOfFirstMovie, idxOfLastMovie);

//     // console.log(props);

//     return (
//         <>
//             <div className="movie__page">
//                 return (
//                 <>
//                     <div className="movie__colls">
//                         <img
//                             className="movie__img"
//                             src={IMG_URL + poster_path}
//                             alt={title}
//                         />
//                         <div className="movie__info info-box">
//                             <div className="movie__info-title">
//                                 {truncate(name, 15) ||
//                                     truncate(title, 15)}
//                             </div>
//                             <div className="movie__info-extra">
//                                 <div className="movie__info-date">
//                                     {release_date &&
//                                         releaseYear(release_date)}
//                                     {first_air_date &&
//                                         releaseYear(first_air_date)}
//                                     <span className="card__runtime">
//                                         {(runtime &&
//                                             `${runtime} min`) ||
//                                             (episode_run_time &&
//                                                 `${episode_run_time} min`)}
//                                     </span>
//                                 </div>
//                                 <div className="movie__info-rating">
//                                     <p>
//                                         <FaStar className="rating-star" />
//                                     </p>
//                                     <p>{vote_average}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <Pagination totalMovies={props.length} /> */}
//                 </>
//                 );
//             </div>
//         </>
//     );
// }

// export default MoviePages;

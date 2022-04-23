import { v4 } from "uuid";
import { useMovie } from "../helpers/movie-hooks";

const Pagination = ({ totalMovies }) => {
    const { moviesPerPage } = useMovie();

    console.log(totalMovies);

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div style={{ color: "white" }}>
            <nav>
                <ul>
                    {pageNumber.map((num) => (
                        <li key={v4()} className="page__item">
                            <a href="!#">{num}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;

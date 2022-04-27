import { FaStar } from "react-icons/fa";
import { v4 } from "uuid";
import { useMovie } from "../../helpers/movie-hooks";

function GenreCard({ props }) {
    const { searchResults, setSearchResults, searchTerm, setSearchTerm } =
        props;
    const { IMG_URL, img_size, releaseYear, truncate } = useMovie();
    

    return (
        <section className="card__search">
            {searchTerm && (
                <ul className="card__search-list">
                    {searchResults?.map(
                        ({
                            title,
                            name,
                            popularity,
                            vote_average,
                            release_date,
                            first_air_date,
                            media_type,
                            poster_path,
                        }) => (
                            <li
                                key={v4()}
                                className="card__search-item"
                                onClick={() => {
                                    console.log(title, name);
                                    setSearchResults([]);
                                    setSearchTerm("");
                                }}
                            >
                                <div className="item_img-container">
                                    <img
                                        className="item__img"
                                        src={
                                            poster_path &&
                                            IMG_URL + img_size.xs + poster_path
                                        }
                                        alt={title}
                                    />
                                </div>
                                <div className="item_tags">
                                    <h4 className="item_title">
                                        {truncate(title, 30) ||
                                            truncate(name, 30)}
                                    </h4>
                                    <span className="rating">
                                        {" "}
                                        <FaStar className="icon-star" />{" "}
                                        {vote_average || popularity}
                                    </span>
                                    <span className="year">
                                        {(release_date || first_air_date) &&
                                            releaseYear(
                                                release_date || first_air_date
                                            )}
                                    </span>
                                    <span className="media_type">
                                        {media_type.toUpperCase()}
                                    </span>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            )}
        </section>
    );
}

export default GenreCard;

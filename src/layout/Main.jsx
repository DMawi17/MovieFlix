import MovieRows from "../components/movies/MovieRows";

const Main = ({ props }) => {
    console.log(props);

    return (
        <main className="main container">
            <div className="movie__wrapper grid">
                {props.map(({ title, item }) => (
                    <div key={title}>
                        <p className="movie__shelf-heading">{title}</p>
                        <MovieRows {...{ item }} />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;

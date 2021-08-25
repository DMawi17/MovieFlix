import Categories from "./Categories";

const Main = () => {
    const { movie } = useMovie();

    const categoryParts = movie[0].category.split("-");
    const categoryUI = categoryParts
        .map((part) => part[0].toUpperCase() + part.substring(1))
        .join(" ");

    const newMoviesImages = [SnakeEyes, Vivo, Cryptozoo, Reminiscence, Demonic];
    const trendingImages = [
        SweetGirl,
        CODA,
        PosterBoys,
        MonsterHunter,
        TheGirlWho,
        OutOfTime,
        ShinyFlakes,
    ];
    const popularImages = [
        JurassicHunt,
        BlackWidow,
        Alien,
        TheKissingBoothe,
        JungleCruise,
        Risen,
        FastFurious9,
    ];
    const featuredImages = [
        HitmansWife,
        TheSwarm,
        PAWPatrol,
        TheSuicideSquad,
        LoudHouse,
        Extinct,
        Stillwater,
    ];

    return (
        <div className="Main">
            <h2>{categoryUI}</h2>
            {/* {movie[0].movie.map(m => {
                return (
                    <div>{m.title}</div>
                )
            })} */}
            <div className="d-flex gap-2 gallery">
                {/* {imageGallery.map(image => {
                    return (
                        <img src={`../Img/${image}`} />
                    )
                })} */}
                {newMoviesImages.map((image) => {
                    return <img src={image} alt="" />;
                })}
            </div>
        </div>
    );
};

export default Main;

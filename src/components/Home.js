import Main from "./Main";

const Home = ({ category, movie }) => {
    return (
        <div>
            <Main category={category} movie={movie}/>
        </div>
    );
};

export default Home;

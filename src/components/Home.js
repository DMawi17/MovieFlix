import Main from "./Main";


const Home = ({ category, movie }) => {
    return (
        <div>
            <Header />
            <Main category={category} movie={movie}/>
        </div>
    );
};

export default Home;

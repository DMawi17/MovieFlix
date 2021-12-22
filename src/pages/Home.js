import Banner from "../components/Header/Banner";
import NavBar from "../components/Header/NavBar";
import { MainHome } from "../components/Main/Main";

const Home = () => {
    return (
        <div id="Home">
            <NavBar />
            <Banner />
            <MainHome />
        </div>
    );
};

export default Home;

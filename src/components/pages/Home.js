import Banner from "../Header/Banner";
import NavBar from "../Header/NavBar";
import { MainHome } from "../Main/Main";

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

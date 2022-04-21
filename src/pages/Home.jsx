import BannerSwiper from "../components/banner/BannerSwiper";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Main from "../layout/Main";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <BannerSwiper />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;

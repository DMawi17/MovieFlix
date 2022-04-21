import BannerSwiper from "../components/banner/BannerSwiper";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Main from "../layout/Main";

const Home = () => {
    return (
        <section className="home">
            <Header />
            <BannerSwiper />
            <Main />
            <Footer />
        </section>
    );
};

export default Home;

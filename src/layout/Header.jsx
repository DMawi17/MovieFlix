import Nav from "./Nav";
import BannerSwiper from "../components/banner/BannerSwiper";

const Header = () => {
    return (
        <header className="header container">
            <Nav />
            <BannerSwiper />
        </header>
    );
};

export default Header;

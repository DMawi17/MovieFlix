import HeaderNav from "./HeaderNav";
import HeaderCard from "./HeaderCard";

const Header = () => {
    return (
        <div style={{ height: "30vh", outline: "1px solid red" }}>
            <HeaderNav />
            <HeaderCard />
        </div>
    );
};

export default Header;

import { useLocation } from "react-router-dom";
import { FaCat } from "react-icons/fa";

const Whoops404 = () => {
    const location = useLocation();

    return (
        <section className="whoops">
            <h1
                style={{
                    color: "papayawhip",
                    position: "absolute",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50%, -50%) ",
                }}
            >
                <FaCat style={{ fontSize: "4rem" }} />{" "}
                <span style={{ fontSize: "3rem" }}>Whoops!</span> <br />
                Resource not found at {location.pathname}
            </h1>
        </section>
    );
};

export default Whoops404;

import { useLocation } from "react-router-dom";
import { FaCat } from "react-icons/fa";

const Whoops404 = () => {
    const location = useLocation();

    return (
        <section className="whoops">
            <h2>
                <FaCat /> <span>Whoops!</span> <br />
                Resource not found at {location.pathname}
            </h2>
        </section>
    );
};

export default Whoops404;

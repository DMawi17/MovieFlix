import { useLocation } from "react-router-dom";
import { FaCat } from "react-icons/fa";

const Whoops404 = () => {
    const location = useLocation();

    return (
        <div id="Whoops">
            <h2>
                <FaCat /> <span>Whoops!</span> <br />
                Resource not found at {location.pathname}
            </h2>
        </div>
    );
};

export default Whoops404;

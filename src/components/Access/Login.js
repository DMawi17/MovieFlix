import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useMovie } from "../../context/movie-hooks";

function Login() {
    const { email, setEmail, password, setPassword, doLogin } = useUser();
    const { bannerPic } = useMovie();

    return (
        <div
            id="FormBG"
            style={{
                backgroundSize: "1",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerPic?.backdrop_path}"`,
                backgroundPosition: "center center",
            }}
        >
            <div className="Login">
                <div id="Sign_Logo">
                    movie<span>Flix</span>
                </div>
                <h2>Connect to your account</h2>
                <form onSubmit={doLogin} className="Form">
                    <input
                        className="Input"
                        type="email"
                        placeholder="Not Required" // FIXME:
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="Input"
                        type="password"
                        placeholder="Not Required" // FIXME:
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link  to="/home"> {/* FIXME: */}
                    <button className="Connect" type="submit">
                        Connect
                        </button>
                    </Link>
                        
                    <br />

                    <Link className="Register" to="/signup">
                        Register
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;

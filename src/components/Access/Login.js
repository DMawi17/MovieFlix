import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useMovie } from "../../context/movie-hooks";

function Login() {
    const { email, setEmail, password, setPassword, doLogin } = useUser();
    const { bannerPic } = useMovie();

    return (
        <div
            id="Form"
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
                <Form onSubmit={doLogin} className="mb-3">
                    <Form.Control
                        className="mb-3"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mb-3"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Check
                        className="mb-3"
                        type="checkbox"
                        label="Remember me and stay connected"
                    />
                    <Button
                        className="mb-3 button"
                        variant="danger"
                        type="submit"
                    >
                        Connect
                    </Button>
                    <br />
                    <Nav.Link id="Register" as={NavLink} to="/signup">
                        Register
                    </Nav.Link>
                </Form>
            </div>
        </div>
    );
}

export default Login;

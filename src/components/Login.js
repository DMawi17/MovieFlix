import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, Button, Nav } from "react-bootstrap";
import "../style.css";
import { RiNetflixFill } from "react-icons/ri";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function doLogin(e) {
    e.preventDefault();

    // setUser({ id: 1, email, name: "Example User" });
  }

  return (
    <div className="LoginUser">
      <h1>
        <RiNetflixFill size="45" />
      </h1>
      <h2>Connect to your account</h2>

      <Form onSubmit={doLogin} className="mb-3">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <Button className="mb-3 button" variant="danger">
          Connect
        </Button>
        <br />
        <Button className="mb-3 button" variant="danger">
          {/* Google Logo -- google */}
          Connect with Google
        </Button>

        <Nav.Link>Forgot your password?</Nav.Link>
        <Nav.Link>Don't have an account? Register here.</Nav.Link>
      </Form>
    </div>
  );
}

export default Login;

// eye-slash
// eye

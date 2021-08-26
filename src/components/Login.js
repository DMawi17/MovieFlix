import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import UserContext from "../UserContext";
import { Form, Button, Nav } from "react-bootstrap";
import "../style.css";

function Login() {
  // const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function doLogin(e) {
    e.preventDefault();

    // if (email !== "example@email.com") {
    //   alert("Invalid email");
    //   return;
    // }

    // setUser({ id: 1, email, name: "Example User" });
  }

  return (
    <div className="LoginUser">
      <h1>C o n n e c t</h1>
      <h2>Connect to your account</h2>
      <Form className="mb-4 bg-dark" text={"light"}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            className="bg-light"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Control
          className="mb-4"
          className="bg-light"
          type="password"
          placeholder="Password"
        />

        <Form.Check
          className="mb-4 bg-dark"
          type="checkbox"
          label="Remember me and stay connected"
        />

        <Button variant="primary" type="submit" className="mb-4 bg-danger">
          Connect
        </Button>
        <br />
        <Button variant="primary" type="submit" className="mb-4 bg-danger ">
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

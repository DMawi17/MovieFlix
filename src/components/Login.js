import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import UserContext from "../UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../style.css";

var style = {
  padding: "20px",
  width: "50%",
};

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
    <Form style={style} className="loginuser mb-4 bg-dark" text={"light"}>
      <Form.Text>C o n n e x i o n</Form.Text>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label
        // size="lg"
        >
          Connect to your account
        </Form.Label>
        <Form.Control
          className="bg-light"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Control
          className="bg-light"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-4 bg-dark" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me and stay connected" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-4 bg-danger">
        Connect
      </Button>
      <br />
      <Button variant="primary" type="submit" className="mb-4 bg-danger ">
        {/* Google Logo -- google */}
        Connect with Google
      </Button>
      <Form.Group>
        <Form.Text>Forgot your password?</Form.Text>
        <Form.Text>Don't have an account? Register here.</Form.Text>
      </Form.Group>
    </Form>
  );
}

export default Login;

// eye-slash
// eye

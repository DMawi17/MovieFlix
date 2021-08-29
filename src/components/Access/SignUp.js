import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/userContext";

const SignUp = () => {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        doSignUp,
        termsRead,
        // setTermsRead,
    } = useUser();

    return (
        <div id="Form">
            <div className="SignUp">
                <div id="Sign_Logo">
                    <a href="/">
                        movie<span>Flix</span>
                    </a>
                </div>
                <h2 className="mb-4">Sign up</h2>
                <Form onSubmit={doSignUp}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Control
                                placeholder="First name"
                                type="text"
                                value={firstName}
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Last name"
                                type="text"
                                value={lastName}
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Form.Control
                        className="mb-3"
                        placeholder="Email address"
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mb-3"
                        placeholder="Password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control
                        className="mb-3"
                        placeholder="Confirm password"
                        type="password"
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {/* <Form.Check
                    className="mb-4"
                    type="checkbox"
                    value={termsRead}
                    onChange={(e) => setTermsRead(e.target.value)}
                    label={
                        <a
                            style={{ cursor: "pointer" }}
                            className="text-light text-decoration-none"
                            href="https://www.websitepolicies.com/blog/what-are-terms-and-conditions"
                        >
                            I've read the Terms & Conditions.
                        </a>
                    }
                /> */}
                    <Button
                        className="mb-3 button"
                        variant="danger"
                        disabled={
                            password.length === 0 ||
                            confirmPassword.length === 0 ||
                            termsRead
                        }
                        type="submit"
                    >
                        Sign Up
                    </Button>
                    <div id="Go_Login">
                        <p>Have an account already? </p>
                        <span>
                            <Nav.Link
                                className="p-0 text-danger"
                                as={NavLink}
                                to="/"
                            >
                                Log in here
                            </Nav.Link>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;

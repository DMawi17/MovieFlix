import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { RiNetflixFill } from 'react-icons/ri';
// import { useUser } from "../context/UserContext";
import { useState } from 'react';


const SignUp = () => {
    
    // const { user, setUser } = useUser();
    const [ user, setUser ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    
    
    const doSignUp = (e) => {
        e.preventDefault();
    
        // if (user !== "") {
        if (email === "lea@example.org") {
            alert("You're already signed up. Go to Login.");
        } else if (password !== confirmPassword) {
            alert("Password versions are different. Enter password again.");
            return;
        }

        setUser({id: 1, email, name: `${firstName} ${lastName}`});
    }

    return (
        <div className="SignUp">
            <h1><RiNetflixFill size="45" /></h1>
            <h2>Sign up</h2>
            <Form onSubmit={doSignUp}>
                <Row className="mb-3">
                    <Col>
                    <Form.Control 
                        placeholder="First name"
                        value={firstName}
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                    </Col>
                    <Col>
                    <Form.Control 
                        placeholder="Last name"
                        value={lastName}
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                    </Col>
                </Row>
                <Form.Control 
                    className="mb-3"  
                    placeholder="Email address"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Form.Control 
                    className="mb-3" 
                    placeholder="Password" 
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control 
                    className="mb-3" 
                    placeholder="Confirm password"
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Form.Check 
                    className="mb-3"
                    type="checkbox" 
                    label={`I've read the Terms & Conditions.`}
                />
                <Button 
                    className="mb-3 button"
                    variant="danger"
                    disabled={password.length === 0 ||      
                        confirmPassword.length === 0 
                        // || !checkbox
                    } 
                    type="submit">
                        Sign Up
                </Button> 

            </Form>
            
        </div>
    );
};

export default SignUp;

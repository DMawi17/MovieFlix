import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#">MovieFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} exact to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="movie-page">
                            Films
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="action3">
                            Series
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="action3">
                            My List
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;

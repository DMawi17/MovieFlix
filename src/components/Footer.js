import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Footer() {
  return (
    <Row xs={1} md={3} className="bg-dark">
      <Col>
        <Card bg={"dark"} text={"light"} style={{ height: "100%" }}>
          <Card.Body>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
            <Card.Title>Terms and Conditions</Card.Title>
            <Card.Link
              className="text-white"
              href="/get-to-know-us"
              style={{ textDecoration: "none", variant: "white" }}
            >
              Who we are
            </Card.Link>
            <br />
            <Card.Link
              className="text-white"
              href="/contact"
              style={{ textDecoration: "none" }}
            >
              Contact us
            </Card.Link>
            <br />
            <Card.Link
              className="text-white"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Our vision
            </Card.Link>
            <br />
            <Card.Link
              className="text-white"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Blog
            </Card.Link>
          </Card.Body>
          <Card.Footer>c 2021 MovieFlix, Inc.</Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card bg={"dark"} text={"light"} style={{ height: "100%" }}>
          <Card.Body>
            Link
            <Card.Title>Terms and Conditions</Card.Title>
            <Card.Link
              className="text-white"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Terms and Conditions
            </Card.Link>
            <br />
            <Card.Link
              className="text-white"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Help center
            </Card.Link>
            <br />
            <Card.Link
              className="text-white"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Cookies
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg={"dark"} text={"light"} style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title>Terms and Conditions</Card.Title>
            <Card.Link
              className="text-white"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Join us
            </Card.Link>
            <br />
            <Card.Link
              className="text-white"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Become a Web Developer
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Footer;

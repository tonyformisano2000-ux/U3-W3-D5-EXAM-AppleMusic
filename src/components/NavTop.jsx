import { Row, Col, Navbar, Container } from "react-bootstrap";
import logoMusic from "../assets/logos/music.svg";
import logoNormal from "../assets/logos/apple.svg";
import { MenuApp } from "react-bootstrap-icons";

const NavTop = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-2">
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={4} className="d-flex justify-content-start">
            <MenuApp size={24} className="text-white" />
          </Col>

          <Col xs={4} className="d-flex justify-content-center">
            <img
              className="d-none d-md-inline"
              src={logoNormal}
              style={{ filter: "brightness(0) invert(1)", height: "24px" }}
              alt="Apple Logo"
            />
            <img
              className="d-md-none"
              src={logoMusic}
              style={{ filter: "brightness(0) invert(1)", height: "24px" }}
              alt="Apple Music Logo"
            />
          </Col>

          <Col xs={4} className="d-flex justify-content-end">
            <h6
              className="bg-danger text-white rounded-2 px-3 py-1 mb-0"
              style={{ cursor: "pointer", fontSize: "0.9rem" }}
            >
              Accedi
            </h6>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavTop;

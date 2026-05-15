import { Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logoMusic from "../assets/logos/music.svg";
import logoNormal from "../assets/logos/apple.svg";
import { MenuApp } from "react-bootstrap-icons";
const NavTop = () => {
  return (
    <Navbar expand="lg">
      <Row className="bg-dark">
        <Col className="text-center text-white">
          <MenuApp />
        </Col>
        <Col className="text-center text-white">
          <img
            className="d-none d-md-inline"
            src={logoNormal}
            style={{ filter: "brightness(0) invert(1)" }}
            alt="Apple music Logo"
          />
          <div className="d-md-none">
            <img
              src={logoMusic}
              style={{ filter: "brightness(0) invert(1)" }}
              alt="Apple music Logo Music"
            />
          </div>
        </Col>
        <Col className="text-center text-white">
          <h1 className="bg-danger text-white rounded-2">Accedi</h1>
        </Col>
      </Row>
    </Navbar>
  );
};
export default NavTop;

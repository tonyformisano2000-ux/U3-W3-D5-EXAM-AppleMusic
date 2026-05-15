import { Container, Row, Col } from "react-bootstrap";
import Hero from "./components/Hero";
import NavTop from "./components/NavTop";
import "bootstrap/dist/css/bootstrap.css";
import NuoveUscite from "./components/NuoveUscite";
import SquareContent from "./components/SquareContent";
import Esplora from "./components/Esplora";
import Footer from "./components/footer";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <Row>
          <Col className="d-none d-md-grid col-md-2">
            <SideBar />
          </Col>
          <Col className="col-md-10">
            {" "}
            <NavTop></NavTop>
            <Row>
              <Hero></Hero>
            </Row>
            <Row>
              <h3>Nuovi episodi radio</h3>
              <SquareContent />
            </Row>
            <Row>
              <h3 className="text-white">Nuove uscite</h3>
              <SquareContent content={NuoveUscite} />
            </Row>
            <Row>
              <h3 className="text-white">Altro da esplorare</h3>
              <Esplora />
            </Row>
            <Row>
              <Footer />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

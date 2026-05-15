import { Col, Row, Card, Carousel } from "react-bootstrap";
import foto1 from "../assets/images/1a.png";
import foto2 from "../assets/images/1b.png";
import foto3 from "../assets/images/1c.png";

const Hero = () => {
  return (
    <div className="container-fluid mt-4">
      <h1 className="text-white mb-3">Novità</h1>

      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <Row className="flex-nowrap">
            <Col xs={6}>
              <Card className="bg-dark text-white border-0">
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted small">
                    NUOVA STAZIONE RADIO
                  </Card.Subtitle>
                  <Card.Title className="fs-5">
                    Rilassati, al resto ci pensiamo noi
                  </Card.Title>
                  <Card.Img src={foto1} className="mt-2" />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card className="bg-dark text-white border-0">
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted small">
                    NUOVA STAZIONE RADIO
                  </Card.Subtitle>
                  <Card.Title className="fs-5">
                    Ecco la nuova casa della musica latina
                  </Card.Title>
                  <Card.Img src={foto2} className="mt-2" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col xs={6}>
              <Card className="bg-dark text-white border-0">
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted small">
                    NUOVA STAZIONE RADIO
                  </Card.Subtitle>
                  <Card.Title className="fs-5">
                    Musica dello skibidi boddibi
                  </Card.Title>
                  <Card.Img src={foto3} className="mt-2" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;

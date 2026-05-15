import { Col, Card, CardBody } from "react-bootstrap";
import FetchThis from "./fetch";
import foto1 from "../assets/images/2a.png";
import foto2 from "../assets/images/2b.png";
import foto3 from "../assets/images/2c.png";
import foto4 from "../assets/images/2d.png";
import foto5 from "../assets/images/2e.png";

const SquareContent = (props) => {
  if (!props.content) {
    const cardTitles = [
      "prologo con Abuelo",
      "The Wanderer",
      "Michael Bublé & Carly Pearce",
      "Stephan Moccio & ZaneLowe Interview",
      "Chart Spotlight: Julia Michaels",
    ];

    const fotoArray = [foto1, foto2, foto3, foto4, foto5];

    return (
      <>
        {cardTitles.map((ct, i) => (
          <Col key={`static-${i}`} xs={6} md={4} lg={2} className="mb-3">
            <Card className="h-100 border-0 bg-transparent">
              <CardBody className="p-0">
                <Card.Img
                  className="rounded-3 shadow-sm"
                  src={fotoArray[i]}
                  alt={ct}
                />
                <Card.Title className="fs-6 text-white mt-2 text-truncate">
                  {ct}
                </Card.Title>
              </CardBody>
            </Card>
          </Col>
        ))}
      </>
    );
  } else {
    return (
      <>
        {props.content.map((Canzone, i) => (
          <FetchThis key={`${Canzone}-${i}`} nomeCanzone={Canzone} />
        ))}
      </>
    );
  }
};

export default SquareContent;

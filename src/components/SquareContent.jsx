import { Col, Card, CardBody } from "react-bootstrap";
import FetchThis from "./fetch";
const SquareContent = (props) => {
  if (!props.content) {
    const cardTitles = [
      "prologo con Abuelo",
      "The Wanderer",
      "Michael Bublé & Carly Pearce",
      "Stephan Moccio & ZaneLowe Interview",
      "Chart Spotlight: Julia Michaels",
    ];
    const letters = ["a", "b", "c", "d", "e"];
    let source = "";
    return cardTitles.map((ct, i) => {
      source = `../assets/images/${letters[i]}b.png`;
      return (
        <Col>
          <Card key={i}>
            <CardBody className="p-0 bg-dark">
              <Card.Img className="img-fluid" src={source} />
              <Card.Title className="fs-6 text-white">{ct}</Card.Title>
            </CardBody>
          </Card>
        </Col>
      );
    });
  } else {
    return props.content.map((Canzone) => {
      return <FetchThis key={Canzone} nomeCanzone={Canzone}></FetchThis>;
    });
  }
};
export default SquareContent;

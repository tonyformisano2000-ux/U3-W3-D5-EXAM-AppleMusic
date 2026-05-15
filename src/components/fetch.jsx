import { Card, CardBody, Col } from "react-bootstrap";
import { useState } from "react";
const FetchThis = (nomeCanzone) => {
  const [id, setId] = useState("");
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeCanzone.nomeCanzone}`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("response non ok");
      }
    })
    .then((data) => {
      setId(data.data[1].id);
      setCover(data.data[1].album.cover);
      setTitle(data.data[1].album.title);
    })
    .catch((err) => {
      console.log("errore:", err);
    });
  return (
    <Col className="col-4 col-md-2 g-3">
      <Card key={id} className="border-0">
        <CardBody className="p-0 bg-dark">
          <Card.Img className="img-fluid" src={cover} />
          <Card.Title className="fs-6 text-white">{title}</Card.Title>
        </CardBody>
      </Card>
    </Col>
  );
};
export default FetchThis;

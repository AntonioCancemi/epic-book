import data from "../data/fantasy.json";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-light mb-5">Ecco a te il catalogo Fantasy</h1>

        <Row xs={1} sm={2} md={3} lg={4} xlg={5} className="g-4">
          {data.map((book) => (
            <Col>
              <Card className="h-100 border-dark">
                <Card.Img variant="top" src={book.img} height="500px" />
                <Card.Body className="mb0 d-flex flex-column justify-content-between ">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <ul className="text-start border-top">
                      <li>Price: {book.price} $</li>
                      <li>
                        Category: <Badge bg="success">{book.category}</Badge>
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      <p>{this.props.price}</p>

      <p>{this.props.category}</p>
    </Card.Text>
    <Button variant="primary">ADD CART</Button>
    <Card.Footer className="text-muted">{this.props.asin}</Card.Footer>
  </Card.Body>
</Card>;

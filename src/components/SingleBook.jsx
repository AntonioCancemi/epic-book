import { Component } from "react";
import { Badge, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = { dataBook: { selectedClassName: "scale-up-center h-100" } };
  render() {
    return (
      <Col>
        <Card
          id={this.props.asin}
          className={this.state.dataBook.selectedClassName}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body className="px-0 pb-0 d-flex flex-column justify-content-between ">
            <Card.Title>{this.props.title}</Card.Title>
            <div>
              <Card.Text className="align-self-">
                <ul className="text-start border-top">
                  <li>Price: {this.props.price} $</li>
                  <li>
                    Category: <Badge bg="success">{this.props.category}</Badge>
                  </li>
                </ul>
              </Card.Text>

              <Card.Footer className="text-muted">
                <Button
                  className=""
                  variant="primary"
                  onClick={(e) => {
                    this.setState({
                      dataBook: {
                        selectedClassName: "scale-up-center h-100 selected",
                      },
                    });
                  }}
                >
                  ADD CART
                </Button>
                {"   id:"}
                {this.props.asin}
              </Card.Footer>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

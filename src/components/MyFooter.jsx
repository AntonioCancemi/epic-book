import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MyFooter extends Component {
  render() {
    return (
      <Container
        id={this.props.id}
        fluid
        className="fixed-bottom bg-dark text-light my border-top border-light"
      >
        <Row className="justify-content-center ">
          <Col xs={4} className="text-center my-3">
            Home
          </Col>
          <Col xs={4} className="text-center my-3">
            About
          </Col>
          <Col xs={4} className="text-center my-3">
            <a href="#top">Back to Top</a>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MyFooter;

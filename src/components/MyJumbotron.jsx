import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Container";

class MyJumbotron extends Component {
  render() {
    return (
      <Container fluid id="myJumbotron">
        <Row className="justify-content-center">
          <Col className="text-center mb-5 text-light">
            <div>
              <br />
              <br />
              <h1 className="">Book-IT</h1>
              <br />
              <h2>Scegli cosa leggere liberamente</h2>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MyJumbotron;

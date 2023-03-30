import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class MyNav extends Component {
  render() {
    return (
      <Navbar id="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid className="mx-3">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {this.props.brand}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#browse">Borwse</Nav.Link>
              <Nav.Link href="#footer">Bottom</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

//export default Logo;
export default MyNav;

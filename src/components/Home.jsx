import { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";
import BookList from "./BookList";

//inizializzo la libreria GLOBALE
const library = [];
let category = [fantasy, horror, romance, scifi, history];
category.map((category) =>
  category.map((singleArr) => library.push(singleArr))
);
//funzione filtro

class Home extends Component {
  state = {
    keyWord: {
      search: "",
      category: "",
    },
  };

  render() {
    return (
      <Container fluid className="mb-5">
        <Row className="justify-content-center mb-3">
          <Col xs={8} className="d-flex">
            <Form.Control
              type="text"
              aria-describedby="search"
              placeholder="inserisci una qualsiasi lettera o parola per effetuare una ricerca"
              value={this.state.keyWord.search}
              onChange={(e) => {
                this.setState({
                  keyWord: {
                    ...this.state.keyWord,
                    search: e.target.value,
                  },
                });
              }}
            />
            <Button
              onClick={(e) => {
                this.setState({
                  keyWord: {
                    ...this.state.keyWord,
                    search: e.target.value,
                  },
                });
              }}
            >
              RESET
            </Button>
          </Col>
        </Row>

        {this.state.keyWord.search ? (
          <BookList data={library} search={this.state.keyWord.search} />
        ) : (
          <BookList data={library.slice(0, 300)} />
        )}
      </Container>
    );
  }
}
export default Home;

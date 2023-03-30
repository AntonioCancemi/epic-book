import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
class BookList extends Component {
  render() {
    return (
      <Container>
        {this.props.search ? (
          <Row xs={1} sm={2} md={3} lg={4} xlg={5} className="g-4">
            {this.props.data
              .filter((book) => {
                return book.title
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase());
              })
              .map((book) => (
                <SingleBook
                  title={book.title}
                  price={book.price}
                  category={book.category}
                  img={book.img}
                  asin={book.asin}
                />
              ))}
          </Row>
        ) : (
          <Row xs={1} sm={2} md={3} lg={4} xlg={5} className="g-4">
            {this.props.data.map((book) => (
              <SingleBook
                title={book.title}
                price={book.price}
                category={book.category}
                img={book.img}
                asin={book.asin}
              />
            ))}
          </Row>
        )}
      </Container>
    );
  }
}
export default BookList;

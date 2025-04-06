import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SingleBooksComponent from './SingleBooksComponent';
import fantasyBooks from '../Data/fantasy.json';
import historyBooks from '../Data/history.json';
import horrorBooks from '../Data/horror.json';
import romanceBooks from '../Data/romance.json';
import scifiBooks from '../Data/scifi.json';


const allBooks = [
  ...fantasyBooks,
  ...historyBooks,
  ...horrorBooks,
  ...romanceBooks,
  ...scifiBooks,
];

// Rimuovi duplicati se esistono libri con lo stesso asin
const uniqueBooks = [
  ...new Map(allBooks.map((book) => [book.asin, book])).values(),
];

const AllTheBooks = ({ searchTerm, categoryFilter }) => {

  const filteredBooks = uniqueBooks.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? book.category === categoryFilter : true;
    return matchesTitle && matchesCategory;
  });

  return (
    <Container>
      <Row className="d-flex justify-content-center flex-wrap">
       
        {filteredBooks.length === 0 ? (
          <p>No books found</p>
        ) : (
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <SingleBooksComponent book={book} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default AllTheBooks;

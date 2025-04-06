import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommentArea from './CommentArea';

const SingleBooksComponent = ({ book, onSelectBook }) => {
  const [selected, setSelected] = useState(false);


  const handleCoverClick = () => {
    setSelected(!selected);
    if (onSelectBook) {
      onSelectBook(book.asin);
    }
  };

  return (
    <div>
      <Card
        style={{
          width: '18rem',
          height: '400px',
          border: selected ? '2px solid red' : 'none',
        }}
        onClick={handleCoverClick}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
        <Card.Body style={{ height: '150px' }}>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>


      <Link to={`/book/${book.asin}`}>
        <Button variant="primary">View Details</Button>
      </Link>


      {selected && <CommentArea book={book} />}
    </div>
  );
};

export default SingleBooksComponent;

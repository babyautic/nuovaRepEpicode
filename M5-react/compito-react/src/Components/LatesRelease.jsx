import React, { useState } from 'react';
import SingleBooksComponent from './SingleBooksComponent';
import CommentArea from './CommentArea';

const LatesRelease = ({ books }) => {
  const [selected, setSelected] = useState(null);

  
  const handleSelectBook = (asin) => {
    setSelected(asin);  
  };

  return (
    <div className="d-flex">
      
      <div style={{ flex: 1 }}>
        {books.map((book) => (
          <SingleBooksComponent
            key={book.asin}
            book={book}
            onSelectBook={handleSelectBook}  
          />
        ))}
      </div>

      
      <div style={{ flex: 1 }}>
        {selected && <CommentArea book={books.find((book) => book.asin === selected)} />}
      </div>
    </div>
  );
};

export default LatesRelease;

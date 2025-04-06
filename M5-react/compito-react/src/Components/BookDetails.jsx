import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fantasyBooks from '../Data/fantasy.json';
import historyBooks from '../Data/history.json';
import horrorBooks from '../Data/horror.json';
import romanceBooks from '../Data/romance.json';
import scifiBooks from '../Data/scifi.json';

const BookDetails = () => {
  const { asin } = useParams();  
  const [book, setBook] = useState(null);

  useEffect(() => {
    
    const allBooks = [
      ...fantasyBooks,
      ...historyBooks,
      ...horrorBooks,
      ...romanceBooks,
      ...scifiBooks,
    ];

    const selectedBook = allBooks.find(book => book.asin === asin);
    setBook(selectedBook);  

  }, [asin]);  

  if (!book) {
    return <div>Loading...</div>;  
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.img} alt={book.title} style={{ width: '200px' }} />
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      
    </div>
  );
};

export default BookDetails;

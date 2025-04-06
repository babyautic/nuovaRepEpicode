import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ book }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews/${book.asin}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews.');
      } finally {
        setLoading(false);
      }
    };

    if (book.asin) {
      fetchReviews();
    }
  }, [book.asin]);

  return (
    <div>
      {loading && <p>Loading...</p>} 
      {error && <p>{error}</p>}
      <CommentList reviews={reviews} />
      <AddComment book={book} />
    </div>
  );
};

export default CommentArea;

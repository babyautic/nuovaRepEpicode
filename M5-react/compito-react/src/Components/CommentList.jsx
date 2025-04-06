import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review!</p>
      ) : (
        reviews.map((review) => (
          <SingleComment key={review.id} review={review} />
        ))
      )}
    </div>
  );
};

export default CommentList;

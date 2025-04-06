import React from 'react';

const SingleComment = ({ review }) => {
  return (
    <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <p style={{ fontWeight: 'bold' }}>{review.author}:</p>
      <p>{review.comment}</p>
    </div>
  );
};

export default SingleComment;

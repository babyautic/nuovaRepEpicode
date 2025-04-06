import React, { useState } from 'react';

const AddComment = ({ book }) => {
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || !author) return;

    const newReview = { author, comment, bookAsin: book.asin };
    
    await fetch(`/api/reviews/${book.asin}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    });

    setComment('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h4 style={styles.heading}>Add a review:</h4>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '15px',
    backgroundColor: '#2f2f2f',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    color: 'white',
  },
  heading: {
    color: '#fff',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #555',
    fontSize: '14px',
    backgroundColor: '#444',
    color: 'white',
  },
  textarea: {
    padding: '8px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #555',
    fontSize: '14px',
    minHeight: '100px',
    backgroundColor: '#444',
    color: 'white',
  },
  button: {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  }
};

export default AddComment;

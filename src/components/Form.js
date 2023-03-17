import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const bookData = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Non-fiction',
    };
    dispatch(addBook(bookData));
    dispatch(postBook(bookData));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleAddBook}>
        <h3>Book Title:</h3>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
          required
        />
        <br />
        Author:
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Author"
          required
        />
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;

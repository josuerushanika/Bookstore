import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form>
      Book Title:
      <input type="text" placeholder="title" />
      <br />
      Author:
      <input type="text" placeholder="Author" />
      <br />
      <button type="submit">Add</button>
    </form>

  );
};

export default Form;

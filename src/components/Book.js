import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { booksActions, deleteBook } from '../redux/books/bookSlice';

const Book = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id));
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" data-id={id} onClick={removeBookHandler}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

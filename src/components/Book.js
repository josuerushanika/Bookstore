import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { booksActions, deleteBook } from '../redux/books/bookSlice';
import styles from '../styles/Book.module.css';

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
    <li className={styles.bookcard}>
      <div className={styles.bookdetails}>
        <div>
          <p className={styles.category}>Action</p>
          <p className={styles.booktitle}>{title}</p>
          <p className={styles.bookauthor}>{author}</p>
        </div>
        <div className={styles.btncontainer}>
          <button type="submit" className={styles.btn}>Comments</button>
          <button type="button" data-id={id} className={styles.btnremovebtn} onClick={removeBookHandler}>Remove</button>
          <button type="submit" className={styles.btn}>Edit</button>
        </div>
      </div>
      <div className={styles.bookchaptercontainer}>
        <div className={styles.bookprogress}>
          <div className={styles.bookcomplete} />
          <div>
            <h3>100%</h3>
            <button type="submit" className={styles.btncpmbtn}>Completed</button>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.chapter}>
          <div>
            <p className={styles.titlechapter}>Current Chapter</p>
            <p className={styles.currentchapter}>Chapter 17</p>
          </div>
          <button type="submit" className={styles.btnchapter}>UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

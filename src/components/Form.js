import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/bookSlice';
import styles from '../styles/Form.module.css';

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
    <div className={styles.formmaincontainer}>
      <div className={styles.formcontainer}>
        <div className={styles.line2} />
        <form className={styles.form} onSubmit={handleAddBook}>
          <input
            className={styles.titleinput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            required
          />
          <br />
          <input
            className={styles.authorinput}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
            required
          />
          <select
            name="category"
            id="category"
            className={styles.categoryinput}
            aria-label="Book category input"
            required
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Technology">Technology</option>
            <option value="Life-style">Life-style</option>
            <option value="Economy">Economy</option>
            <option value="Politics">Politics</option>
            <option value="General">General</option>
          </select>
          <button className={styles.submitbtn} type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

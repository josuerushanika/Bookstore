import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/bookSlice';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let output;
  if (isLoading) output = <h3>Wait Loading...</h3>;

  if (books?.length > 0) {
    output = books.map((bk) => (
      <Book
        key={bk.item_id}
        title={bk.title}
        author={bk.author}
        id={bk.item_id}
      />
    ));
  }

  return (
    <div>
      {output}
      <Form />
    </div>
  );
};
export default Books;

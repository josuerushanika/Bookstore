import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

const books = [
  { id: 1, title: 'My first Book', author: 'Henry potter' },
  { id: 2, title: 'Tech and Innovation', author: 'Mark Sorrez' },
  { id: 3, title: 'Coding Camp', author: 'Gruy Frank' },
  { id: 4, title: 'Network Principle', author: 'Mone Iyono' },
];

const Books = () => (
  <div>
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </ul>
    <Form />
  </div>
);

export default Books;

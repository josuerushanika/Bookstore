import React from 'react'
import Book  from '../components/Book'
import Form from '../components/Form'

const books= [
    {id:1, title:'My first Book', author:'Henry potter'}
]

const Books = () => {
  return (
    <div>
        <ul>
        book.map((book) =>{
             <li key={book.id}>
          <Book title={book.title} author={book.author}/>
         </li>
        })
        </ul>
      <Form/>
    </div>

  )
}

export default Books

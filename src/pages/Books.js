import React from 'react'
import Book  from '../components/Book'
import Form from '../components/Form'

const book= [
    {id:1, title:'My first Book', author:'Henry potter'}
]

const Books = () => {
  return (
    <div>
    <ul>
      <Book title="Tech and Innovation" author="Mark Sorrez" />
      <Book title="Coding Camp" author="Gruy Frank" />
      <Book title="Network Principle" author="Mone Iyono" />
    </ul>
    <Form />
    </div>

  )
}

export default Books

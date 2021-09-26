import React from 'react'
import Book from './Book.js'

const List = () => {
  return (
    <div>
      <h3>Hardback Fiction</h3>
      <p>As of: <span>{new Date().toLocaleString()}</span></p>
      <Book className="book-list"/>
    </div>
  )
}

export default List

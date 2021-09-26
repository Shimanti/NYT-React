import React from 'react'
import style from './book.css'

const Book = ({index, title, author, bookUrl, image, description}) => {
  return (
    <div className={style}>
      <div className="book">
        <span className="index">{index}</span>
        <img src={image} alt="book_image" className="image"/>
        <section className="textual">
          <h3 className="name">{title}</h3>
          <h4 className="author">by {author}</h4>
          <p className="description">{description}</p>
        </section>
        <a href={bookUrl} className="book-url">
          <i className="fas fa-link"> Buy</i>
        </a>
      </div>
    </div>
  )
}

export default Book
import React from 'react'
import style from './book.css'

const Book = ({index, title, author, bookUrl, image, description}) => {
  return (
    <div className={style}>
      <div className="book">
          <span className="index">{index}</span>
          <a href={bookUrl} className="book-url">
              <img src={image} alt="book_image"/>
          </a>
          <section className="textual">
            <h3 className="name">{title}</h3>
            <h4 className="author">by {author}</h4>
            <p className="description">{description}</p>
          </section>
      </div>
  </div>
  )
}

export default Book

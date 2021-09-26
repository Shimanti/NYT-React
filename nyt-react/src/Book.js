import React from 'react'

const Book = () => {
  return (
    <div>
      <p>APPLES NEVER FALL</p>
      <p>by Liane Moriarty</p>
    </div>
  )
}

// const API_Key='wuDGORmXAWnBvUGYjc30Wsqgtz87l1wj'
// URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_Key}`

// async function getData() {
//     const res = await fetch(URL)
//     const data = await res.json()
//     // console.log(data.results.books)
//     return data.results.books
// }
// const books = getData()
//
// const Book = (books) => {
//   books.forEach((book,index) => {
//     return (
//       <div>
//         <span className="number">{index + 1}</span>
//         <div className="book">
//           <p className="book-name">{book.title}</p>
//           <p className="book-author">by {book.author}</p>
//         </div>
//       </div>
//     )
//   })
// }

export default Book
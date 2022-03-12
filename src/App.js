import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';
import Header from './Header';
import Button from './Button';

// NY Times API URL - change if the API location changes
const selection = 'hardcover-fiction';
const API_Key = 'wuDGORmXAWnBvUGYjc30Wsqgtz87l1wj';
const URL = `https://api.nytimes.com/svc/books/v3/lists/current/${selection}.json?api-key=${API_Key}`;

// app retrieves NYT Times bestselling books from the API
const App = () => {
  // initial states set to empty
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const books = data.results.books.slice(0, 10);
    setBooks(books);
    console.log(books);
  };
  // renders function
  useEffect(() => {
    getBooks();
  }, []);

  // gets books from API

  return (
    <div className="App">
      <Header />
      <Button />
      <div className="books">
        {books.map((book, index) => (
          <Book
            key={book.title}
            title={book.title}
            index={index + 1}
            author={book.author}
            bookUrl={book.amazon_product_url.replace(
              'NYTBSREV-20',
              'shimanti-20'
            )}
            image={book.book_image}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

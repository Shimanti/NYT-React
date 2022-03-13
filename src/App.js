import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';
import Header from './Header';
import Button from './Button';

// NY Times API URL - change if the API location changes
const API_Key = 'wuDGORmXAWnBvUGYjc30Wsqgtz87l1wj';

// app retrieves NYT Times bestselling books from the API
const App = () => {
  // initial states set to empty
  const [books, setBooks] = useState([]);
  // * This handles the state whether the current books are or aren't fiction
  const [isNonFiction, setIsNonFiction] = useState(false);

  // get books from api
  // * Now getBooks is a little more dynamic, we can insert the type of books we want to get
  const getBooks = async (type) => {
    const URL = `https://api.nytimes.com/svc/books/v3/lists/current/${type}.json?api-key=${API_Key}`;

    const response = await fetch(URL);
    const data = await response.json();
    const books = data.results.books.slice(0, 10);
    setBooks(books);
    // console.log(books)
  };
  // renders function
  // * This will grab the books initially (on the initial render) and if there's a
  // * change in the type of books, we'll grab the books accordingly.
  useEffect(() => {
    getBooks(isNonFiction ? 'hardcover-nonfiction' : 'hardcover-fiction');
  }, [isNonFiction]);

  // * This function gets passed down to the <Button> component so that whenever we
  // * click the button the book type changes, which then triggers our useEffect function
  // * above
  const handleBookTypeChangeClick = () => {
    // * setState can take a function which contains the previous state. This just
    // * toggle isNonFiction to false or true
    setIsNonFiction(previousState => !previousState);
    getBooks(isNonFiction ? 'hardcover-nonfiction' : 'hardcover-fiction');
  };

  return (
    <div className="App">
      <Header />
      <Button
        currentBookType={isNonFiction ? 'NonFiction' : 'Fiction'}
        handleClick={handleBookTypeChangeClick}
      />
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

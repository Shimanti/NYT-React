import './App.css';
import Book from './Book'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the NYT Bestsellers List</h1>
      <h3>Hardback Fiction</h3>
      <p>As of: <span>{new Date().toLocaleString()}</span></p>
      <Book className="book-list"/>
    </div>
  );
}

export default App;

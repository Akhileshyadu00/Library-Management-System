import Book from "./Book";
import { Books } from '../utils/mockData';
import './Book.css';
import { useState } from "react";

function BookList() {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(Books);

  const handleSearch = () => {
    const results = Books.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(results);
  };

  return (
    <>
      <div className="container">
        <h3>Search Book Here</h3>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by title..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="book-list">
          {filteredBooks.length === 0 ? (
            <p>No books found.</p>
          ) : (
            filteredBooks.map((data) => (
              <Book key={data.id} bookDetails={data} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default BookList;

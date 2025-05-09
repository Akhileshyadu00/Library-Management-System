import Book from "./Book";
import { Books } from "../utils/mockData";
import "./Book.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";

function BookList() {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(Books); // Default to all books

  // useEffect(() => {
  //   fetchData();
  // }, [filteredBooks]);

  const {data, error, loading} = useFetch(
    "https://openlibrary.org/search.json?q=test"
  );

  useEffect(() => {
    if(data) {
      setFilteredBooks(data)
    }
  },[data])

  if(error) {
    return <p>Error in Loading: {error}</p>
  }
  if(loading) {
    return <p>Loading: {loading}</p>
  }

  // async function fetchData() {
  //   try {
  //     const response = await fetch("https://openlibrary.org/search.json?q=test");
  //     const json = await response.json();
  //     console.log("API result", json);
     
  //   } catch (error) {
  //     console.error("Failed to fetch data", error);
  //   }
  // }

  const handleSearch = () => {
    const results = Books.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(results);
  };

  return (
    <div className="container">
      <h3>Search Book Here</h3>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="book-list">
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <Book bookDetails={book} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BookList;

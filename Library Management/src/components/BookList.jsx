import Book from "./Book";
import { Books } from "../utils/mockData";
import "./Book.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

function BookList() {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(Books);

  const { setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("https://openlibrary.org/search.json?q=test");
      const json = await response.json();
      console.log("API result", json);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }

  const handleSearch = () => {
    const results = Books.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(results);
  };

  // const { data, error, loading } = useFetch(
  //   "https://openlibrary.org/search.json?q=test"
  // );

  // useEffect(() => {
  //   if (data && data.docs) {
  //     const booksFromAPI = data.docs.map((doc, index) => ({
  //       id: index,
  //       title: doc.title,
  //       author: doc.author_name ? doc.author_name[0] : 'Unknown Author',
  //     }));
  //     setFilteredBooks(booksFromAPI);
  //   }
  // }, [data]);

  // if (error) return <p>Error in Loading: {error}</p>;
  // if (loading) return <p>Loading...</p>;

  // const handleSearch = () => {
  //   const results = data.docs
  //     .map((doc, index) => ({
  //       id: index,
  //       title: doc.title,
  //       author: doc.author_name ? doc.author_name[0] : 'Unknown Author',
  //     }))
  //     .filter(book =>
  //       book.title.toLowerCase().includes(searchText.toLowerCase())
  //     );

  //   setFilteredBooks(results);
  // };

  return (
    <div className="container">
      <h3>Search Book Here</h3>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setUserName(e.target.value); // optional: sync with context --- Create seperate input 
          }}
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

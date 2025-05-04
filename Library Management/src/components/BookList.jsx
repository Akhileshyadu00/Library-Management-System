import Book from "./Book";
import './Book.css';

function BookList(props) {
  return (
    <div className="book-list">
      {props.booksData.map((data) => (
        <Book key={data.id} bookDetails={data} />
      ))}
    </div>
  );
}

export default BookList;


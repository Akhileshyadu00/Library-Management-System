import './Book.css'; 

function Book(props) {
  const { title, author, description, coverImageUrl } = props.bookDetails;

  return (
    <div className="book-card">
      <img
        src={coverImageUrl}
        alt={title}
        className="book-image"
      />
      <div className="book-content">
        <h2 className="book-title">{title}</h2>
        <h4 className="book-author">{author}</h4>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
}

export default Book;

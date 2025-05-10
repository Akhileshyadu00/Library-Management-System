import './Book.css'; 
import userContext from '../utils/userContext';
import { useContext } from 'react';
import {  } from 'react-router-dom';

function Book(props) {
  const { title, author, description, coverImageUrl } = props.bookDetails;

  const data = useContext(userContext);
  console.log(data);

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
        <p >{data.loggedIn}</p>
      </div>
    </div>
  );
}

export default Book;

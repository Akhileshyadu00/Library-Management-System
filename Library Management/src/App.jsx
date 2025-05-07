import BookList from './components/BookList'
import Book from './components/Book'
import { Books } from './utils/mockData'
import './App.css'
import { useState } from 'react'


function App() {
  
const [searchText, setSearchText] = useState("")
const [filteredBooks, setFilteredBooks] = useState(Books)

  function handleSearch(){
    const filterBooks = Books.filter((book) => 
      book.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredBooks(filterBooks)
  }

  return (
    <>
    <h1>Library Management System</h1>
    <div>
      <h3>Search Book Here</h3>
    <div>
      <input type="text" className='' onChange={(e) => setSearchText(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
    </div>
    </div>
    <BookList booksData = {filteredBooks}/>
    </>
  )
}

export default App

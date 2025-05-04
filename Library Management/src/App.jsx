import BookList from './components/BookList'
import Book from './components/Book'
import { Books } from './utils/mockData'
import './App.css'

function App() {
  

  return (
    <>
    <h1>Library Management System</h1>
    <BookList booksData = {Books}/>
    </>
  )
}

export default App

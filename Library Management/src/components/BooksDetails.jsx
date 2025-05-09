import React from 'react'
import { useParams } from 'react-router-dom'
import { Books } from '../utils/mockData'

function BooksDetails() {

    const params = useParams()
    const book = Books.filter(book => book.id == params.id)
    console.log(book);
    

  return (
    <>
      <h1>{ `Books Detail with id ${params.id}`}</h1>
      {
        book.map(book => {
           return <>
                <h2>{book.title}</h2>
                <h4>{book.description}</h4>
                <img src={book.coverImageUrl} alt="" width="200px" />
                <h3>{book.pageNo}</h3>
            </>
        })
      }
    </>
  )
}

export default BooksDetails

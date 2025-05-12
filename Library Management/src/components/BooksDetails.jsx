import React from 'react'
import { useParams } from 'react-router-dom'
import { Books } from '../utils/mockData'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../utils/CartSlice'

function BooksDetails() {

    const params = useParams()
    const book = Books.filter(book => book.id == params.id)
    //console.log(book);

    const dispatch =  useDispatch()

  function handleAdd(item) {
    dispatch(addItem(item));
  }

  function handleRemove() {
   dispatch(removeItem());
  }
    

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
                <button onClick={() => handleAdd(book)}>Add to Cart</button>
                <button onClick={() => handleRemove(book)}>Remove from Cart</button>
            </>
        })
      }
    </>
  )
}

export default BooksDetails

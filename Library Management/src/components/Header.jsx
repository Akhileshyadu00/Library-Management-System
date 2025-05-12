import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import userContext from '../utils/userContext'
import { useSelector } from 'react-redux'


function Header() {

  const data = useContext(userContext);

  const cartItem = useSelector(store => store.cart.items);

  console.log("cartItems", cartItem);
  

  return (
    <>
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/demo"><li>Demo</li></Link>
    <li>{data.loggedInUser}</li>
        <li>{cartItem.length} Items in cart</li>
    </ul> 
    </>
  )
}

export default Header

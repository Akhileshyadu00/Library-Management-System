import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import userContext from '../utils/userContext'


function Header() {

  const data = useContext(userContext);
  console.log(data);
  

  return (
    <>
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/demo"><li>Demo</li></Link>
    </ul> 
    </>
  )
}

export default Header

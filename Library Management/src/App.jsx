import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import UserContext from './utils/userContext'
import './App.css'

function App() {
  const [userName, setUserName] = useState("Akhilesh Yadav");

  return (
    <>
      <Header />
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Outlet />
      </UserContext.Provider>
    </>
  )
}

export default App

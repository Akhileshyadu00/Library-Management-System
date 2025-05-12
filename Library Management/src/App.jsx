import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import UserContext from './utils/userContext'
import './App.css'
import { Provider } from 'react-redux';
import appStore from './utils/Appstore'



function App() {
  const [userName, setUserName] = useState("Akhilesh Yadav");

  return (
    <Provider store={appStore}>
      <Header />
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Outlet />
      </UserContext.Provider>
    </Provider>
  )
}

export default App

import { StrictMode } from 'react'
import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Demo from './components/Demo.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from './components/BookList.jsx'
import BooksDetails from './components/BooksDetails.jsx' 
import Memo from './components/Memo.jsx'



const About = lazy(() => import("./components/About.jsx"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookList />
      },
      {
        path: "/about",
        element: <Suspense fallback={<div> Loading...</div>}>
            <About />
          </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/demo",
        element: <Demo />
      },
      {
        path: "/book/:id",
        element: <BooksDetails />
      },
      {
        path: "/memo",
        element:<Memo />
      }
    ],
    errorElement: <Error />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={appRouter}/>
  </StrictMode>,
)

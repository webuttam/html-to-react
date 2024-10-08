import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Header from './components/main/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Footer from './components/main/Footer'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Home /></>,
    },
    {
      path: "/contact",
      element:<><Header /><Contact /></>,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Header /> */}
      <Footer />
    </>
  )
}

export default App

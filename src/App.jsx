import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Header from './components/main/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Footer from './components/main/Footer'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Contact />
      <Footer />
    </>
  )
}

export default App

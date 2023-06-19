import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Selection from './components/Selection'

function App() {
  return (
    <>
    <Navbar/>
    <h1>We tackle interesting topics everyday</h1>
    <Search/>
    <Selection/>
    </>
  )
}

export default App

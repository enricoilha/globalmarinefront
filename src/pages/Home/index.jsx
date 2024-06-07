import { useState } from 'react'
import './style.css'
import { Header } from '../../components/Header/index'
import { Feed } from '../../components/Feed/index'
import {Footer } from '../../components/Footer/index'



function App() {

  return (
    <div className="App">
      <Header />
      <Feed />
      <Footer />
    </div>
  )
}

export default App

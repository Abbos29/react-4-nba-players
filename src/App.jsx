import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'

import Home from './pages/Home'
import Top from './pages/Top'
import Teams from './pages/Teams'


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/top' element={<Top />} />
        <Route path='/teams' element={<Teams />} />

      </Routes>

    </>
  )
}

export default App
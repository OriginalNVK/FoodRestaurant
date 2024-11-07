import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
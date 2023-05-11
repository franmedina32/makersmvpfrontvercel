import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Favs from './components/Favs'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'
import './styles/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} >
            <Route path='/login' element={<Login/>}/> 
            <Route path='/register' element={<Register/>}/> 
        </Route>
      </Routes>
      <div>
     
    </div>

    </Router>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import IndexPage from './pages/IndexPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} >
            <Route index element={<IndexPage/>}/>
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

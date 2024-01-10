import './App.css'
import Login from './components/views/Login/Login'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Signup from './components/views/signup/Signup'
// import { use_user_auth } from './script/authcontext'
// import { useState } from 'react'
import Profile from './components/views/profile/Profile'


function App() {
  // const {user } = use_user_auth()


  return (
    <Router>

      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/me' element={<Profile/>} />
      </Routes>

    </Router>
  )
}

export default App

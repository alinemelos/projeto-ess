import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/login'
import Filme from '../pages/filme'
import AdminDashboard from '../pages/adminDashboard'
import UserDashboard from '../pages/userDashboard'
import Adm from '../pages/adm'

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/filme/:id' element={<Filme />} />
        <Route path='/adm/:id' element={<Adm />} />
      </Routes>
    </Router>
  )
}

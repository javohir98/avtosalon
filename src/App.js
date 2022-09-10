import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainHome from './pages/MainHome'
import Login from './pages/login/Login'
import Home from './pages/admin/Home'

const App = () => {
  const currentUser = localStorage.getItem('Auth Token')

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to='/login' />
  }

  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route exact index element={<MainHome />} />
          <Route path='login' element={<Login />} />
          
          <Route path='admin'>
            <Route exact index element={<RequireAuth><Home /></RequireAuth>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
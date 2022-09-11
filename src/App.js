import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainHome from './pages/MainHome'
import Login from './pages/login/Login'
import Home from './pages/admin/Home'
import CarList from './pages/admin/cars_list/CarList'
import ModelCars from './pages/model_cars/ModelCars'
import CarDetails from './pages/car_details/CarDetails'

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
          <Route path='model-cars' element={<ModelCars />} />
          <Route path='model-car/view/:id' element={<CarDetails />} />
          
          <Route path='admin'>
            <Route exact index element={<RequireAuth><Home><CarList /></Home></RequireAuth>} />
            <Route path='elonlar' element={<Home><h1>Admin E'lonlar page</h1></Home>} />
            <Route path='faq' element={<RequireAuth><Home><h1>Admin FAQ page</h1></Home></RequireAuth>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
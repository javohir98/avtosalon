import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import AdminHeader from './components/header/AdminHeader'
import { 
  Container 
} from './MainStyles'

const Home = () => {
  return (
    <Container mode='dark'>
      <Sidebar />
      <div>
        <AdminHeader />
        <h1>The list here</h1>
      </div>
    </Container>
  )
}

export default Home
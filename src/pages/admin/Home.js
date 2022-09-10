import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Sidebar from './components/sidebar/Sidebar'
import AdminHeader from './components/header/AdminHeader'
import { 
  Container,
  Wrapper 
} from './MainStyles'
import { getCars } from '../../redux/admin/adminSlice'

const Home = ({children}) => {
  const [params, setParams] = useState({limit: 5, page: 1})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCars(params))
  }, [params])

  return (
    <Container mode='dark'>
      <Sidebar />
      <div style={{width: '100%'}}>
        <AdminHeader />
        <Wrapper>
          {children}
        </Wrapper>
      </div>
    </Container>
  )
}

export default Home
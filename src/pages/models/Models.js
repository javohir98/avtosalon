import React, { useEffect }  from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from'react-redux'
import { getCategory } from '../../redux/user/userSlice'
import { Card, Cards } from './Models.style'

const Models = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.user.category)

  useEffect(() => {
    dispatch(getCategory())
  }, [])
  

  return (
    <>
      <Navbar />
      <div className='container'>
        <Cards>
          {categories.map((item, index) => (
            <Card>
              <img src={`${'https://cartestwebapp.herokuapp.com/'}${item.imgUrl}`} alt={item.name} />
              <h3>{item.name}</h3>
            </Card>
          ))}
        </Cards>
      </div>
    </>
  )
}

export default Models
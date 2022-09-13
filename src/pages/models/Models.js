import React, { useEffect, useState }  from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from'react-redux'
import { getCategory } from '../../redux/user/userSlice'
import { Card, Cards, Title } from './Models.style'
import { selectCategory } from '../../redux/user/userSlice'

const Models = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const categories = useSelector(state => state.user.category)

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  useEffect(() => {
    categories.length === 0 ? setIsLoading(false) : setIsLoading(true)
  }, [categories])
  

  return (
    <>
      <Navbar />
      <div className='container'>
        <Title>Modellari</Title>
        {isLoading ? 
          <Cards>
            {categories.map((item, index) => (
              <div>
                <Card to={`model-cars/${item.name}`} onClick={() => dispatch(selectCategory(item))}>
                  <img src={`${'https://cartestwebapp.herokuapp.com/'}${item.imgUrl}`} alt={item.name} />
                  <h3>{item.name}</h3>
                </Card>
              </div>
            ))}
          </Cards>
        : <h1 style={{textAlign: 'center'}}>Loading...</h1>}
      </div>
    </>
  )
}

export default Models
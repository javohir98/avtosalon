import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import { getCategoryCars, selectCategory } from '../../redux/user/userSlice'
import { numberWithSpaces } from '../../utils/numberFormat'
import { Card, Cards, Title } from './ModelCars.style'

const ModelCars = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const id = useSelector(state => state.user.selectCategory._id)
  const selectedCars = useSelector(state => state.user.selectedCategoryCars)

  useEffect(() => {
    if(id) {
      dispatch(getCategoryCars(id))
    }

    return () => {
      dispatch(selectCategory(''))
    }
  }, [])

  useEffect(() => {
    selectedCars.length !== 0 ? setIsLoading(false) : setIsLoading(true)
  }, [selectedCars])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Title>Modellar turlari</Title>
        {isLoading
          ?
            <h1 style={{textAlign: 'center'}}>Loading...</h1> 
          :
            <Cards>
              {selectedCars.map((item, index) => (
                <div>
                  <Card to={`/model-car/view/${item._id}`}>
                    <img src={`${'https://cartestwebapp.herokuapp.com/'}${item.imgUrl}`} alt={item.name} />
                    <h3>{item.marka?.name}</h3>
                    <h3>Narxi: {numberWithSpaces(item.price)}</h3>
                  </Card>
                </div>
              ))}
            </Cards>
        }
      </div>
    </>
  )
}

export default ModelCars
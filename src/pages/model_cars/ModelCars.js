import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import { getCategoryCars, selectCategory } from '../../redux/user/userSlice'
import { numberWithSpaces } from '../../utils/numberFormat'
import { Card, Cards, Title } from './ModelCars.style'

const ModelCars = () => {
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

  return (
    <>
      <Navbar />
      <div className='container'>
        <Title>Modellar turlari</Title>
        <Cards>
          {selectedCars.map((item, index) => (
            <div>
              <Card to={`model-car/view/${item.name}`}>
                <img src={`${'https://cartestwebapp.herokuapp.com/'}${item.imgUrl}`} alt={item.name} />
                <h3>{item.marka?.name}</h3>
                <h3>Narxi: {numberWithSpaces(item.price)}</h3>
              </Card>
            </div>
          ))}
        </Cards>
      </div>
    </>
  )
}

export default ModelCars
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
  const status = useSelector(state => state.user.status)

  useEffect(() => {
    if(id) {
      dispatch(getCategoryCars(id))
    }

    return () => {
      dispatch(selectCategory(''))
    }
  }, [])

  useEffect(() => {
    if(status === 'loading') {
        setIsLoading(true)
    } else if(status === 'succeeded') {
        setIsLoading(false)
    } else if(status === 'failed') {
        alert("Something wrong with load!")
    }
  }, [status, dispatch])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Title>Modellar turlari</Title>
        {isLoading
          ?
            <h1 style={{textAlign: 'center'}}>Loading...</h1> 
          :
            (
              selectedCars.length === 0 ?
                <h1 style={{textAlign: 'center'}}>Empty</h1> 
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
            )
        }
      </div>
    </>
  )
}

export default ModelCars
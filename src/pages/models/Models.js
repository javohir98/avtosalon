import React, { useEffect, useState }  from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from'react-redux'
import { getCategory } from '../../redux/user/userSlice'
import { Card, Cards, Title } from './Models.style'
import { selectCategory } from '../../redux/user/userSlice'
import axios from 'axios'

const Models = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const categories = useSelector(state => state.user.category)
  const status = useSelector(state => state.user.status)

  useEffect(() => {
    if(status === 'idle')
      dispatch(getCategory())
    if(status === 'loading') {
        setIsLoading(true)
    } else if(status === 'succeeded') {
        setIsLoading(false)
    } else if(status === 'failed') {
        alert("Something wrong with load!")
    }
  }, [status, dispatch])

  const handleDelete = async id => {
    await axios.delete(`https://cartestwebapp.herokuapp.com/category/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('Auth Token')}`
      },
    })
  }
  

  return (
    <>
      <Navbar />
      <div className='container'>
        <Title>Modellari</Title>
        {isLoading ? 
          <h1 style={{textAlign: 'center'}}>Loading...</h1>
        : 
          (
            categories.length === 0 ? 
              <h1 style={{textAlign: 'center'}}>Empty</h1>
              :
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
            
          )
          
        }
      </div>
    </>
  )
}

export default Models
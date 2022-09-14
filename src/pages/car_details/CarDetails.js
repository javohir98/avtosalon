import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Col, Container, DetailsBox, DTitle, D_ImgBox, FooterInfo, Hr, ImageBox, MarkBox, Title, TopPrice, Type } from './CarDetails.style'
import ThreeSixty from 'react-360-view'
import { BsTree } from 'react-icons/bs'
import { RiHomeFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCarDetails } from '../../redux/user/userSlice'
import { numberWithSpaces } from '../../utils/numberFormat'
import CarInside from '../../components/car-inside/CarInside'

const CarDetails = () => {
  const [inSide, setInSide] = useState(false);
  const dispatch = useDispatch()
  const car = useSelector(state => state.user.selectCar)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getCarDetails(id))
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Title>Model</Title>
        <Container>
          <Col size='32%'>
            <DetailsBox>
              <DTitle>Chevrolet Malibu</DTitle>
              <TopPrice>{car && numberWithSpaces(car.price)} so'm dan</TopPrice>
              <D_ImgBox>
                <img src={`https://cartestwebapp.herokuapp.com/${car.imgUrl}`} alt='here img' />
              </D_ImgBox>
              <MarkBox>
                <b>Marka: </b>
                <span>{car.marka?.name}</span>
              </MarkBox>
              <MarkBox>
                <b>Tanirovkasi: </b>
                <span>{car.tonirovka}</span>
              </MarkBox>
              <MarkBox>
                <b>Motor: </b>
                <span>{car.motor}</span>
              </MarkBox>
              <MarkBox>
                <b>Year: </b>
                <span>{car.year}</span>
              </MarkBox>
              <MarkBox>
                <b>Color: </b>
                <span>{car.color}</span>
              </MarkBox>
              <MarkBox>
                <b>Distance: </b>
                <span>{car.distance}</span>
              </MarkBox>
              <MarkBox>
                <b>Gearbook: </b>
                <span>{car.gearbok}</span>
              </MarkBox>
              <MarkBox>
                <b>Deseription: </b>
                <span className='des'>{car.description}</span>
              </MarkBox>
              <Hr />
              <FooterInfo>
                <b>Umumiy xarajat: </b>
                <span>{car && numberWithSpaces(car.price)} so'm dan</span>
              </FooterInfo>
            </DetailsBox>
          </Col>
          <Col size='68%'>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <h3>Chevrolet Malibu</h3>
              <div>
                <BsTree style={{marginRight: '16px'}} />
                <RiHomeFill />
              </div>
            </div>
            <ImageBox>
              {inSide ?
                <CarInside />
              : 
                <ThreeSixty
                  amount={72}
                  imagePath='https://cdn.kia-motors.uz/exterior/K5/UD//'
                  fileName="{index}.png?v1"
                  loop={3}
                />
              }
            </ImageBox>
            <p style={{textAlign: 'center'}}>Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
            <Type>
              <input
                name="area"
                id="areaOutside"
                type="radio"
                onChange={() => setInSide(!inSide)}
                defaultChecked={!inSide}
              />
              <label htmlFor="areaOutside">Tashqi</label>
              <input
                name="area"
                id="areaInside"
                type="radio"
                onChange={() => setInSide(!inSide)}
                defaultChecked={inSide}
              />
              <label htmlFor="areaInside">{''}Ichki makon</label>
            </Type>
          </Col>
        </Container>
      </div>
    </>
  )
}

export default CarDetails 
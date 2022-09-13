import React from 'react'
import { Pannellum } from "pannellum-react";
import myImage from '../../assets/360-img.jpg'

const CarInside = () => {
  return (
    <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    ></Pannellum>
  )
}

export default CarInside
import React from 'react'
import { Pannellum } from "pannellum-react";

const CarInside = ({img}) => {
  return (
    <Pannellum
        width="100%"
        height="500px"
        image={img}
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
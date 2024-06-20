import React from 'react'
import { Container } from 'react-bootstrap'
import './Brands.css'
import img1 from "./img/logo-1.png"
import img2 from "./img/logo-2.png"
import img3 from "./img/logo-3.png"
import img4 from "./img/logo-4.png"
import img5 from "./img/logo-5.png"
import img6 from "./img/logo-6.png"
import img7 from "./img/logo-7.png"
import img8 from "./img/logo-8.png"
import img9 from "./img/logo-9.png"
import img10 from "./img/logo-10.png"
import img11 from "./img/logo-11.png"
import img12 from "./img/logo-12.png"
import img13 from "./img/logo-13.png"
import img14 from "./img/logo-14.png"
import img15 from "./img/logo-15.png"
import { Slide } from "react-awesome-reveal";


import { useNavigate } from "react-router-dom"

function Brands() {

  const navi = useNavigate()

  const brands = [{
    bImg: img1,
    bName: "Volkswagen"
  },

  {
    bImg: img2,
    bName: "Suzuki"
  },
  {
    bImg: img3,
    bName: "Infinity"
  },
  {
    bImg: img4,
    bName: "Dodge"
  },
  {
    bImg: img5,
    bName: "Mazda"
  },
  {
    bImg: img6,
    bName: "Mitsubishi"
  },
  {
    bImg: img7,
    bName: "Hyundai"
  },
  {
    bImg: img8,
    bName: "Jeep"
  },
  {
    bImg: img9,
    bName: "Kia"
  },
  {
    bImg: img10,
    bName: "Nissan"
  },
  {
    bImg: img11,
    bName: "Toyota"
  },
  {
    bImg: img12,
    bName: "Chevrolet"
  },
  {
    bImg: img13,
    bName: "Lamborghini"
  },
  {
    bImg: img14,
    bName: " Ford "
  },
  {
    bImg: img15,
    bName: "Honda"
  },

  ]

  return (
    <>
      <div id='brands' className='MainAPP_Container' >
        <Container>
          <Slide direction="left">
            <h6>Brands</h6>
          </Slide>
          <div className='asdfa'>
            {
              brands.map((brand) => {
                return (
                  <Slide direction="right">
                    <div className='Cardas' onClick={() => navi("/vehicles/".concat(brand.bName))}>
                      <img src={brand.bImg} />
                      <h5>{brand.bName}</h5>
                    </div>
                  </Slide>
                )
              })
            }
          </div>
        </Container>
      </div>
    </>

  )
}

export default Brands
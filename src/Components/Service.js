import React from 'react'
import './Service.css'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'
import ser1 from './img/aircar.jpg';
import ser2 from './img/full.jpg';
import ser3 from './img/asdf.jpg';
import ser4 from './img/hourimg.jpg';
import ser5 from './img/houring.jpg';
import ser6 from './img/taxi.png';
import { Slide } from "react-awesome-reveal";


const serviceinfo = [
  {
    SerName: 'Airport transfer',
    serImage: ser1,
    serDisc: 'With additional wait time and fight tracking is case of delays, our service is optimized to make every airport transfer a breeze.'
  },
  {
    SerName: 'intercity trips',
    serImage: ser2,
    serDisc: "Your stressfree solution for travelling between cities with chauffeurs all over the world."
  },
  {
    SerName: 'Wedding event',
    serImage: ser3,
    serDisc: "Our friendly, and attentive service combined with thorough attention to details ensure you can truly relax and enjoy your special day"
  },
  {
    SerName: 'Business Meeting',
    serImage: ser4,
    serDisc: "Focus on your meeting with your partners, forget about the road and the car which will distract your thoughts."
  },
  {
    SerName: 'Hourly Service',
    serImage: ser5,
    serDisc: "Focus on your meeting with your partners, forget about the road and the car which will distract your thoughts."
  },
  {
    SerName: 'Corporate Services',
    serImage: ser6,
    serDisc: "Focus on your meeting with your partners, forget about the road and the car which will distract your thoughts."
  },
]


function Service() {
  return (
    <>
      <Container fluid className='Service_Container'>
        <Slide direction='right'>
          <h6>Services</h6>
        </Slide>


        <Row>
          {
            serviceinfo.map((item) => {
              return (
                <Col sm={12} mg={6} lg={6}>
                    <Card className='Service_Card'>
                      <Card.Img src={item.serImage} className='Card_Image' />
                      <div style={{ flexDirection: 'column' }}>
                        <Card.Body>
                          <Slide direction='left'>
                            <Card.Title className='Service_Name' >{item.SerName}</Card.Title>
                          </Slide>
                          <Slide direction='right'>
                            <Card.Text className='Service_Disc' >
                              {item.serDisc}
                            </Card.Text>
                          </Slide>
                        </Card.Body>
                        <Slide direction='left'>
                          <button className='Read_More_Button'>Read More</button>
                        </Slide>
                      </div>
                    </Card>
                 

                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Service
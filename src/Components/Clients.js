import React from 'react'
import './Clients.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import logo1 from '../Assets/Image/booking.png'
import logo2 from '../Assets/Image/payment-method.png'
import logo3 from '../Assets/Image/driver.png'
import logo4 from '../Assets/Image/protection.png'
import { Slide } from "react-awesome-reveal";



const ChooseData = [
        {
                ICON: logo1,
                Name: "Easy Online Booking "
        }, {
                ICON: logo2,
                Name: "Professional Driver "
        }, {
                ICON: logo3,
                Name: "Variety of car brands"
        }, {
                ICON: logo4,
                Name: "Online Payment"
        },
]

function Clients() {
        return (
                <>
                        <Container className="MainAPP_Container">
                                <Slide direction='right'>
                                        <h6>Our Client</h6>
                                </Slide>
                                <Slide direction='left'>
                                        <div className="gallery-wrap">
                                                <div className="item item-1"></div>
                                                <div className="item item-2"></div>
                                                <div className="item item-3"></div>
                                                <div className="item item-4"></div>
                                                <div className="item item-5"></div>
                                        </div>
                                </Slide>
                        </Container>

                        <Container className='MainAPP_Container' >
                                <Slide direction='right'>
                                        <h6>Why Choose Us</h6>
                                </Slide>
                                <Row>
                                        {
                                                ChooseData.map((item) => {
                                                        return (
                                                                <Col>
                                                                        <Slide direction='left'>
                                                                                <div className='ChooseIcon_Div'>
                                                                                        <Image src={item.ICON} className='Chooose_IMage' />
                                                                                        <h2>{item.Name}</h2>
                                                                                </div>
                                                                        </Slide>

                                                                </Col>
                                                        )
                                                })
                                        }
                                </Row>
                        </Container>
                </>
        )
}

export default Clients
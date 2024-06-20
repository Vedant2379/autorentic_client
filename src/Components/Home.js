import React from 'react'
import './Home.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import car from '../Assets/Image/5-removebg-preview.png'
import { Slide } from "react-awesome-reveal";




function Home() {
    return (
        <>
            <Container fluid className='Home_Container'>
                <Row>
                    <Col>
                        <Slide direction="left">
                            <div className='frist_Col' >
                                <h2>Premium Car Rental in India</h2>
                                <h3>Don't deny yourself the pleasure of drivinng the best premium cars from around the world here and now.</h3>
                            </div>
                        </Slide>
                        <Slide direction="down">
                            <div className='Home_Button_Div'>
                                <button class="button-28" role="button">Book Now</button>
                                <button class="button-28" role="button">Know More</button>
                            </div>
                        </Slide>
                    </Col>
                    <Col>
                        <div className='Second_Col_Image'>
                            <Slide direction="right">
                                <Image src={car} className='Home-image' />
                            </Slide>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
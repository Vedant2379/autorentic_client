import React, { useState } from 'react'
import { Container, Row, Card, Col, Image } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import './Fleet.css'
import car1 from './img/Luxury-Car.webp'
import car2 from './img/sports.webp'
import car3 from './img/tesla-electric-car-rental-lat.webp'
import car4 from './img/sedan-monthly-car-rental.webp'
import car5 from './img/ocd_suv.webp'
import car6 from './img/Muscle.webp'
import car7 from './img/Convertible.webp'
import car8 from './img/chauffeur-driver.webp'
import car9 from './img/commercial-vehicles.webp'
import car10 from './img/Economy2.webp'
import { Slide } from "react-awesome-reveal";




function Fleet() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div id='fleet'>
            <Container className='MainAPP_Container' fluid>
                <Slide direction='right'>
                    <h6>Cars For Rent India</h6>
                </Slide>
                <Slide direction='left'>
                    <div className='Fleet-Container'>
                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car1} />
                            <span>Luxury</span><br />
                            <a>12 cars</a>

                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car2} />
                            <span>Sport</span><br />
                            <a>12 cars</a>

                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car3} />
                            <span>electric</span><br />
                            <a>12 cars</a>
                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car4} />
                            <span>monthly</span><br />
                            <a>12 cars</a>

                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car5} />
                            <span>xuv</span><br />
                            <a>12 cars</a>

                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car6} />
                            <span>muscle</span><br />
                            <a>12 cars</a>

                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car7} />
                            <span>Convertible</span><br />
                            <a>12 cars</a>

                        </div>


                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car8} />
                            <span>car With Driver</span><br />
                            <a>12 cars</a>

                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car9} />
                            <span>Commercial</span><br />
                            <a>12 cars</a>

                        </div>

                        <div className='Fleet-main'>
                            <img className="Fleet-image" src={car10} />
                            <span>Economy</span><br />
                            <a>12 cars</a>

                        </div>
                    </div>
                </Slide >
            </Container >


            <section className="section-background section-quote background-overlay text-center">
                <Slide direction='down'>
                    <div>
                        <p>Unlock the freedom to explore with our top-notch car rentals</p>
                    </div>
                </Slide>
            </section>

        </div >
    )
}

export default Fleet
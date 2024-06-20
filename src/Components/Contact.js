


import React from 'react'
import './Contact.css'
import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import Contactpic from '../Assets/Image/ContactUs.jpg'
import { Slide } from "react-awesome-reveal";



function Contact() {
    return (
        <>
            <Container className='Contact_Container'>
                <Row>
                    <Col sm={12} mg={6} lg={7}>
                        <Slide direction='left'>
                            <Image src={Contactpic} className='Contact_Image' />
                        </Slide>
                        <Row>
                            <Col>
                                <Slide direction='right'>
                                    <div className='Address_Container'>
                                        <h3>Address</h3>
                                        <h4>Near to mahadev mandir khadke,
                                            Tal-Bhusawal ,Dist-Jalgoan.
                                        </h4>
                                    </div>
                                </Slide>
                            </Col>

                            <Col>
                                <Slide direction='right'>

                                    <div className='Address_Container' >
                                        <h3>located citys</h3>
                                        <h4>&#8226; Mumbai</h4>
                                        <h4>&#8226; Pune</h4>
                                        <h4>&#8226; Jalgaon</h4>
                                        <h4>&#8226; Nashik</h4>
                                        <h4>&#8226; Indore</h4>


                                    </div>
                                </Slide>
                            </Col>
                            <Col>
                                <Slide direction='right'>
                                    <div className='Address_Container' >
                                        <h3>Contact Info</h3>
                                        <div>
                                            <h4>harshalmm143@gmail.com</h4>
                                            <h4>8975795333</h4>
                                        </div>

                                    </div>
                                </Slide>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} mg={6} lg={5}>
                        <Slide direction='left'>

                            <div className='Contact_Form'>
                                <h6>Get in Touch</h6>
                                <h4>Have an inquiry or same feedback for us ?
                                    fill out the form below to contact our term.</h4>
                                <div>
                                    <Form.Label className='Farm_Label'>First Name</Form.Label>
                                    <Form.Control type='text' className="input" />
                                    <Form.Label className='Farm_Label'>Last Name</Form.Label>
                                    <Form.Control type='text' className="input" />
                                    <Form.Label className='Farm_Label'>Email</Form.Label>
                                    <Form.Control type='email' className="input" />
                                    <Form.Label className='Farm_Label'>Massage</Form.Label>
                                    <Form.Control className='input' as="textarea" rows={3} placeholder="Add your massage" />
                                    <button class="button-57" role="button"><span class="text">Get in Touch</span><span>Send Massage</span></button>

                                </div>

                            </div>
                        </Slide>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Contact
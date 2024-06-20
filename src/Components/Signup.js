import React, { useState } from 'react'
import './Signup.css'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Signup() {

    const navi = useNavigate()

    const [userName, setuserName] = useState("")
    const [userMobile, setuserMobile] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userPassword, setuserPassword] = useState("")


    function Adduser() {
        const userdata = {
            Name: userName,
            Mobile: userMobile,
            Email: userEmail,
            Password: userPassword

        }

        axios.post("http://localhost:5000/AddUser", userdata)

            .then((result) => {
                console.log(result.data)
                navi("/")

            }).catch((err) => {

            });
    }
    return (
        <div>
            <Container>
                <div className='Sign-Model' id='signup'>
                    <h1>Sign Up </h1>
                    <p>Please fill in this form to create an account.</p>
                    <Form >
                        <Form.Label className='Slable'>Your Name</Form.Label>
                        <Form.Control className='Scontrol' type="text" placeholder="Name" onChange={(e) => setuserName(e.target.value)} />
                        <Form.Label className='Slable'>Mobile Number</Form.Label>
                        <Form.Control className='Scontrol' type="text" placeholder="Mobile" onChange={(e) => setuserMobile(e.target.value)} />
                        <Form.Label className='Slable'>E-mail</Form.Label>
                        <Form.Control className='Scontrol' type="email" placeholder="E-mail" onChange={(e) => setuserEmail(e.target.value)} />
                        <Form.Label className='Slable'>Password</Form.Label>
                        <Form.Control className='Scontrol' type="password" placeholder="Password" onChange={(e) => setuserPassword(e.target.value)} />
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Remember me" />
                        <Button onClick={Adduser} className='Sbutton'>Sign Up</Button>
                        <Button className='SCanl-But' onClick={()=>navi("/")}>Cancel</Button>

                        <a>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</a>


                    </Form>
                </div>
            </Container>
        </div>

    )
}

export default Signup
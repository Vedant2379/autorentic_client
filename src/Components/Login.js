import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Login.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../reduxwork/UserSlice'

function Login() {

  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const navi = useNavigate()
  const dispatcher = useDispatch()

  const doLogin = () => {
    const log = {
      Name: userName,
      Password: userPassword
    }
    axios.post("http://localhost:5000/login", log)
      .then((result) => {
        if (result.data.success) {
          alert("Login Successful")
          //dispatcher(login(result.data.data))
          console.log(result.data)
        } else {
          alert("Incorrect username or Password")
        }
        navi('/')

      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <div id='login'>
      <Container>
        <div className='Login-Model' >
          <h1 className='LName'>Login Here </h1>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Label className='Flable'>Enter Username</Form.Label>
            <Form.Control className='Fcontrol' type="text" placeholder="Enter Username" onChange={(e) => setUserName(e.target.value)} />
            <Form.Label className='Flable'>Password</Form.Label>
            <Form.Control className='Fcontrol' type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Remember me" />
            <button className='Lbutton' onClick={() => doLogin()}>Submit</button>
            <Button className='Lbutton' onClick={() => navi("/register")}>Sign Up</Button>

          </Form>
          <div>
            <Button className='Canl-But'>Cancel</Button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>

        </div>
      </Container >

    </div >
  )
}

export default Login
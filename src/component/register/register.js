import {Container, Form,Button, Alert} from 'react-bootstrap'
import './register.css'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Register (){
    const [error, setError] = useState("")
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Username :',usernameRef.current.value)
        console.log('Email :',emailRef.current.value)
        console.log('Confirm Password :',passwordRef.current.value)

        try{
            alert('Succesfull Registered')
            history.push("/login")
        }catch(error){
            setError("Register Failed")
        }
    }
    return (
        <Container className = "content">
<Form action='/register' method='POST' >
  <Form.Group className="mb-3" controlId="formBasicEmail">
  {error && <Alert variant="danger">{error}</Alert>}
      <h1>Register Form</h1>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" ref={usernameRef} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" required />

  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Register
  </Button>
  <p>Have an Account ? Please <a href='/login'>Login</a></p>
</Form>
        </Container>
    )
}
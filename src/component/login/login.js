import {Container, Form,Button, Alert} from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import './login.css'

export default function Login (){
  const [error, setError] = useState("")
  const usernameRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()

  const handleLogin = (e) =>{
      e.preventDefault()
      console.log('Username :',usernameRef.current.value)
      console.log('Confirm Password :',passwordRef.current.value)

      try {
        if(usernameRef.current.value!== ""){
          alert('Succesful Login')
        history.push("/todo")
        }
        else {
          throw(error)
        }
        
      } catch (error){
        setError("Please input Credential")
      }
      
  }

    return (
        <Container className = "content">
<Form action='/login' method='POST' >
{error && <Alert variant="danger">{error}</Alert>}
  <Form.Group className="mb-3" controlId="formBasicEmail">
      <h1>Login </h1>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" ref={usernameRef} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
  </Form.Group>



  <Button variant="success" type="submit" onClick={handleLogin} >
    Login
  </Button>
  <p>Need to Create Account ? Please <a href='/register'>Sign Up</a></p>
</Form>
        </Container>
    )
}
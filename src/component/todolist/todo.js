import Button from '@restart/ui/esm/Button'
import {Container, Form} from 'react-bootstrap'
import { useState } from 'react'

export default function Todo (){
  const [todo, setTodo] = useState("")
  const [todoList,setTodoList] = useState([])

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }
  const addTodo = () => {
    console.log("do this: "+todo)
  }
    return (
        <Container className = "todo-content">
          
          <Form >
          <h1>Todo List Kita</h1>
<Form.Group className="mb-3" controlId="formBasicTodo">

  <Form.Label>Todo List</Form.Label>
  <Form.Control type="text" 
  name ="text"
  id="text"
  placeholder="What todo now?" 
  onChange={(e)=>handleChange(e)} 
   />

  <Button className="add-btn" onClick={addTodo}>
    add 
  </Button>
  <Button className="add">remove</Button>
</Form.Group>
</Form>
        </Container>
    )
}
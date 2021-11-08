import FormTodo from './todoForm';
import React,{useEffect, useState} from 'react';
import TodoList from './todoList';

function TodoPage() {
  const [inputText,setInputText]=useState('')
  const [todos,setTodos]=useState([])

  // Run Once
useEffect(()=>{
  getLocalTodos()
},[])
  // useEffect
  useEffect(()=>{
    saveLocalTodos()
    
  },[todos])

  function saveLocalTodos(){
   
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  
  function getLocalTodos(){
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div>
      <h1>What's your Plan today ?</h1>
    <FormTodo inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default TodoPage;

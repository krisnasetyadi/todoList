import React from "react";
import {BsCheck2Square,BsXSquare} from 'react-icons/bs'
import EditTodo from "./editTodo";


export default function Todo({text,inputText,setInputText,todo,todos,setTodos}){
    // event
    function deletehandler(){
        setTodos(todos.filter(el =>el.id !== todo.id))
        // console.log(todo)
    }
    // function editHandler(todoId, NewValue){
    //   if(!NewValue.text || /^\s*$/.test(NewValue.text)){
    //     return
    //   }
    //   setTodos (prev => prev.map(item=>(item.id===todoId ? NewValue:item)))
      // let updatedTodos = (todos.map(item=>{
      //   if(item.id===todo.id){
      //     todo.completed = !todo.completed
      //   }
      //   return todo
      // }))
      // setTodos(updatedTodos)
    // }
    // function submitUpdate (value){
        
    //     setTodos([
    //         ...todos,{text:inputText,completed:false,id:Math.random()*1000}
    //     ])
    //     setInputText('')
    
    // }
    function completeHandler(){
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item,completed: !item.completed
                }
                
            }
            return item
        }))
    }
    return(
        <div className='todo' >
            <li className={`todo-item ${todo.completed ? 'completed':''}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'> <BsCheck2Square/></button>
            <button onClick={deletehandler} className='delete-btn'><BsXSquare/> </button>
            <button ><EditTodo/></button>
        </div>
        
    )
}
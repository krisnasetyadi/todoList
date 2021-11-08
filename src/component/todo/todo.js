import React from "react";
import {BsCheck2Square,BsXSquare} from 'react-icons/bs'


export default function Todo({text,todo,todos,setTodos}){
    // event
    function deletehandler(){
        setTodos(todos.filter(el =>el.id !== todo.id))
        // console.log(todo)
    }
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
        </div>
        
    )
}
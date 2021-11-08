import React from "react";
import {BsPencilSquare} from 'react-icons/bs'

export default function EditTodo ({setInputText,updateText,todos,setTodos,inputText}){
    function editInput (e){
        setInputText(e.target.value)
        if(setInputText===null){
            return(
                <input type='text'/>
            )
            
        }
    }
    const submitUpdate =()=>{
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()*1000}
        ])
        setInputText('')
    }
    return (
        <form>
            <div className='todo-update' onChange={editInput}>
            <div value={updateText} onClick={editInput} className='edit-btn'>
                <BsPencilSquare/> 
            </div>
            </div>
        </form>
    )
}

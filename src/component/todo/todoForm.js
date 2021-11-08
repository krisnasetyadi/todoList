import React from "react";

export default function FormTodo ({setInputText,todos,setTodos,inputText}){
    function inputHandler (e){
        
        setInputText(e.target.value)
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()*1000}
        ])
        setInputText('')
    }
    return (
        <form>
            <input type='text' className='todo-input' onChange={inputHandler} />
            <button value={inputText} onClick={submitHandler} className='todo-button' type='submit'>
                add
            </button>
        </form>
    )
}

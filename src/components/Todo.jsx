import React, {useEffect, useRef, useState} from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'


const Todo = () => { 

const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);

const inputRef = useRef();


const add = ()=>
    {
        const inpuText =  inputRef.current.value.trim();

        if(inpuText === "")
            {
                return null;
            }

        const newTodo = 
        {
            id: Date.now(), /* every time you enter todo list it will generate unique id for each */
            text: inpuText, /* adding text */
            isComplete: false, /* checking if the statement is complete or not*/
        }

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    // delete todo function
    const deletetodo = (id) =>{
        setTodoList((prvTodos)=>{
            return prvTodos.filter((todo) => todo.id!==id)
        })
    }

    const toggle =(id)=>{
        setTodoList((prevtodos)=>{
            return prevtodos.map((todo)=>
                {
                    if(todo.id===id)
                        {
                            return {...todo, isComplete: !todo.isComplete}
                        }

                        return todo
                        
                })

        })
    }

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
},[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

{/* ----------title---------- */}

    <div className='flex items-center mt-7 gap-2'>
        <img className='w-20' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>My To-Do List</h1>
    </div>
{/* ----------todo list---------- */}

    <div className='flex items-center my-7 bg-gray-200 rounded-full'>

        {/* add the inputref in input box which created above */}
        <input ref={inputRef} className='bg-transparent border-0 outline-none 
        flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' 
        type="text" placeholder='Add your daily tasks' />


        {/* add the add function which created above by using onclick event*/}
        <button onClick={add} className='border-none rounded-full bg-red-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>

    </div>

{/* ----------todo items---------- */}


    <div>

        {todoList.map((item, index)=>{
            return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deletetodo={deletetodo} toggle={toggle}/>
        })}

    </div>
    
    </div>
  )



}

export default Todo

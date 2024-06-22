import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({text,  id, isComplete, deletetodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-8' />
            <p className={`text-slate-700 ml-7 text=[17px] decoration-slate-500
                ${isComplete ? "line-through" : "" }`}> {text}</p>
        </div>
        
        <img onClick={()=>deletetodo(id)} src={delete_icon} alt="" className='cursor-pointer w-5'/>

    </div>
  )
}

export default Todoitems
import { useState } from 'react'
import './TodoList.css'
export default function TodoList({todos, removeItem, coloredItem}) {
    const [arr, setArr] = useState([])
    const randomNum = Math.round(Math.random() * 50)
    const randomIdArr = (id) => {
        console.log(id)
    }

    // console.log(arr)
    
  return (
    <>
    {
       todos.map((item, index) => (
        <li key={`${Math.round(Math.random() * 50)}${index}`}><span>{item}</span> <span onClick={()=> removeItem(index)} className='del'>Delete</span> <span onClick={()=>coloredItem(index)} className='comp'>Completed</span></li>
       ))
    }
    </>
   
    
    
  )
}

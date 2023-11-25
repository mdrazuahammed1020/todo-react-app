import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import './TodoItem.css'


export default function TodoItem() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const addItem = () => {
        if(input !== ''){
            setTodos([...todos, input])
            setInput('')
        }
    }

    const removeItem = (id) => {
        let filterArr = todos.filter((item, index) => index !== id)
        setTodos(filterArr)
        // console.log(id)
    }

    const coloredItem = (id) => {
        let completedTask = todos.filter((item, index) => {
            index === id
        })
        console.log(completedTask)
    }
  return (
    <div className='container'>
        <div className="todo-wrapper">
        <div className="input-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a task..' /> <button onClick={addItem}>Add</button>
        </div>

        <ul>
              <TodoList todos={todos} removeItem={removeItem} coloredItem = {coloredItem} />
        </ul>
        </div>
    </div>
  )
}


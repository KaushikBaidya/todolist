import React, { useState, useRef, useEffect } from 'react'
import TodoList from '../todoList/TodoList'
import './main.css'
import { v4 as uuidv4 } from 'uuid'

export default function Main() {
  const [todo, setTodo] = useState([])
  const todoNameRef = useRef()
  const LOCAL_STORAGE_KEY = 'todoApp.todo'

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodo) setTodo(storedTodo)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  }, [todo])

  const addTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  return (
    <div className="m">
      <div className="logo">Todo List</div>
      <div className="t-list">
        <TodoList todos={todo} />
      </div>
      <div className="action">
        <input ref={todoNameRef} className="input" type="text" required />
        <div className="btn">
          <button className="green" onClick={addTodo}>
            Add Todo
          </button>
          <button className="red">Clear Complete</button>
        </div>
      </div>
    </div>
  )
}

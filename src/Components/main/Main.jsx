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

  const toggleTodo = (id) => {
    const newTodos = [...todo]
    const todoz = newTodos.find((todoz) => todoz.id === id)
    todoz.complete = !todoz.complete
    setTodo(newTodos)
  }

  const addTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  const clearTodo = () => {
    const newTodos = todo.filter((todo) => !todo.complete)
    setTodo(newTodos)
  }

  return (
    <div className="m">
      <div className="logo">Todo List</div>
      <div className="t-list">
        <TodoList todos={todo} toggleTodo={toggleTodo} />
      </div>
      <div className="action">
        <input ref={todoNameRef} className="input" type="text" required />
        <div className="btn">
          <button className="green" onClick={addTodo}>
            Add Todo
          </button>
          <button className="red" onClick={clearTodo}>
            Clear Complete
          </button>
        </div>
        <div className="complete">
          <p>{todo.filter((todo) => !todo.complete).length} tasks left to do</p>
        </div>
      </div>
    </div>
  )
}

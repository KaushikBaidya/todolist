import React from 'react'
import TodoList from '../todoList/TodoList'
import './main.css'

export default function Main() {
  return (
    <div className="m">
      <div className="logo">Todo List</div>
      <div className="t-list">
        <TodoList />
      </div>
      <div className="action">
        <input type="text" />
        <div className="btn">
          <button className="green">Add Todo</button>
          <button className="red">Clear Complete</button>
        </div>
      </div>
    </div>
  )
}

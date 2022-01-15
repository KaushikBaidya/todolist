import React from 'react'
import './todo.css'

export default function Todo({ todo, toggleTodo }) {
  const todoClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <div className="todo">
      <label>
        <input
          className="check"
          type="checkbox"
          checked={todo.complete}
          onChange={todoClick}
        />
        {todo.name}
      </label>
    </div>
  )
}

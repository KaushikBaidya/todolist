import React from 'react'
import './todo.css'

export default function Todo({ todo }) {
  return (
    <div className="todo">
      <label>
        <input className="check" type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  )
}

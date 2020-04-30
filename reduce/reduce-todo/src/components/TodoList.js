import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.todoItems.map((todoItems) => (
        <Todo
          key={todoItems.id}
          todoItems={todoItems}
          toggleItem={props.toggleItem}
        />
      ))}
      <button className='clear-btn' onClick={() => props.clearCompleted()}>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList
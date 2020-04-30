import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm'
import { initialState, todoReducer } from '../src/reducers/reducer';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)
  console.log('reducer initial state', state);

  const toggleItem = (id) => {
    dispatch({ type: 'TOGGLE_ITEM', payload: id })
  }

  const toggleCompleted = () => {
    dispatch({ type: 'TOGGLE_COMPLETED' })
  }
    
  return (
    <div className="App">
      <h2>Here's a List of your Todos:</h2>
        <AddTodoForm state={state} dispatch={dispatch}/>
        <TodoList
          todoItems={state.todoItems}
          toggleItem={toggleItem}
          toggleCompleted={toggleCompleted}
        /> 
    </div>
  )
}

export default App;

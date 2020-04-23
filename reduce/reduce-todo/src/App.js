import React, { useReducer } from 'react';
import './App.css';
import { initialState, todoReducer } from '../src/reducers/reducer';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo'

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

    console.log('reducer initial state',state);
    console.log('reducer dispatch',dispatch);
    
  return (
    <div className="App">
        <AddTodo dispatch={dispatch} />
        {state.map( todo => {
          return  <Todo id={todo.id} todo={todo}/>
          })}

    </div>
  );
}

export default App;

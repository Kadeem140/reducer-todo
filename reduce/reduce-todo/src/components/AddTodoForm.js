import React, {useState, useReducer} from 'react';
import { initialState, todoReducer } from '../reducers/reducer';
import Todo from './Todo'

export default function AddTodoForm( props ){
    const [task, setTask] = useState('');

    const handleChange = e => {
        setTask(e.target.value)
    };
    
    // const addTodo = (task) => {
    //     console.log("addTodo task",task)
    //     props.dispatch({type: "ADD_ITEM" , payload:task });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch({type: "ADD_ITEM" , payload:task });
        // addTodo(task);
        setTask('');
    }

    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <label> ADD NEW TODO!:</label>
                    <input  type="text"
                            placeholder="Todos"
                            value ={task}
                            onChange={handleChange} />
                    <button>
                        Add Something!
                    </button>
                </form>
            <Todo todoItems={props.state.todoItems} />
        </div>
    )
}

// mport React, { useState } from 'react'

// export default function AddTodo(props) {
//     const [todo, setTodo] = useState('')
   
//     return (
//         <div>
//             <form onSubmit={(e) => e.preventDefault()}>
//                 <input type='text'
//                         value={todo}
//                         onChange={(e) => {setTodo(e.target.value)}} />
//                 <button onClick={() => props.dispatch({type: "ADD_ITEM", payload: todo})}>Add Todo</button>
//             </form>
//         </div>
//     )
// }


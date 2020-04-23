import React, {useState} from 'react';



export default function AddTodo( {dispatch} ){

    const [task, setTask] = useState("")

    const handleChange = e => {
        setTask(e.target.value)
    }

    return (
        <div>
                <form onSubmit={e => e.preventDefault()}>
                    <label> Add To Current Todo !</label>
                    <input  type="text"
                            placeholder="Todos"
                            value ={task}
                            onChange={handleChange} />

                    <button onClick={() => {
                        dispatch( {type: "ADD_ITEM" , payload: task } ) } }>
                            Add another TODO!
                    </button>
                </form>
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
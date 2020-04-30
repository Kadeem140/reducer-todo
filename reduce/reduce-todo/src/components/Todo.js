import React from 'react';



export default function Todo(props){
        console.log("Todo Component Props",props)

    return (
        <div
             className={`item${props.todoItems.completed ? ' completed' : ''}`}
             onClick={() => props.toggleItem(props.todoItems.id)}
        >
            {/* {props.todoItems.map(element => {
               return <li>{element.item}</li>     //try and spread out the existng elements??
            })} */}

            <p>{props.todoItems.item}</p>
        </div>
    )
 }
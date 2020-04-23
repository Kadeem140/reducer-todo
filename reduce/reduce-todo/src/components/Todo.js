import React from 'react';



export default function Todo(props){
        console.log("Todo Component Props",props)
    return (
        <h1>{props.todo.item}</h1>
    )


}
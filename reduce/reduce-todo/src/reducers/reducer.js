import React from 'react';

export const initialState = [{
    item: 'Complete Reducer assingment',
    completed: false,
    id: 3892987589
}]
export const todoReducer = (state, action) => {
    switch(action.type){         //we are switching data based on the action.type
        case "ADD_ITEM":                //In the case where the type has a value of "ADD_ITEM"
            return [{                       //Run this code
                ...state,                   //Make a mutable copy of state
                item: action.payload,       //With this object added to it
                completed: false,
                id: Date.now()
            }]
        default: return state;
    }
}


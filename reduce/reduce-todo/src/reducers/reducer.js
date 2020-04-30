export const initialState = {
    todoItems : [
        {
            item: 'Complete Reducer assingment',
            completed: false,
            id: 3892987589
        }
    ]
}
export const todoReducer = (state, action) => {
    switch(action.type){         //we are switching data based on the action.type
        case "ADD_ITEM":                //In the case where the type has a value of "ADD_ITEM"
            return {                       //Run this code
                ...state,                   //Make a mutable copy of state
                todoItems: [
                    ...state.todoItems, 
                    {
                        item: action.payload,       //With this object added to it
                        completed: false,
                        id: Date.now()
                    }
                ]
             }
        case "TOGGLE_COMPLETED":
            return{
                ...state,
                todoItems: state.todoItems.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } else return item
                })
            }
            case 'CLEAR_COMPLETED':
                return {
                  todoItems: state.todoItems.filter((item) => item.completed === false)
                }
                default: break


    }
    
}

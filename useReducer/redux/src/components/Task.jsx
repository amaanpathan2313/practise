import { useReducer, useState } from "react";


const Task = () => {

    function reducer(state, action){

        switch(action.type){

            case 'add':
                return [...state, {id : Date.now(), task : action.payload, completed : false}];
            case 'complete':
                let updateTodos = state.map((ele) => ele.id == action.payload ? {...ele, completed : true} : ele);
                return state = updateTodos;
            case 'delete':
                    let updateTodo = state.filter((ele) => ele.id  != action.payload)
                return state = updateTodo;
            default : 
            return state;
           
        }; // switch

    }; //  reducer

    const [todos, dispatch] = useReducer(reducer, [])
   
    return(
        <>

        <button onClick={() => dispatch({type : 'add', payload : "New task"})}>Add Todos</button>

        {todos.length == 0 ? <h1>No Todos </h1>: <h1>Todos</h1>}

        {todos.length > 0 && todos.map((ele) => (
            <div key={ele.id} style={{display : 'flex'}}>
             {ele.completed ? (<p style={{color : 'pink'}}> {ele.task} </p>)  : (<p> {ele.task} </p>) }  
             <button onClick={() => dispatch({type : 'complete', payload : ele.id})} disabled={ele.completed}>Completed</button>
             <button onClick={() => dispatch({type : 'delete', payload : ele.id})}>Delete</button>
            </div>
        ))}
 
        </>
    )

};

export default Task;
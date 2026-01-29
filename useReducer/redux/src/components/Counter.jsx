import { useReducer } from "react";

 
 function Counter() {

    function reducer(state, action){

     switch(action.type){

        case 'increment' :
            return {count : state.count + 1};
        case 'decrement' : 
            return {count : state.count -1};
        case 'reset':
            return {count : state.count = 0}
        default :
           return state;

     }; // switch

    }; // reducer function

    const [state, dispatch] = useReducer(reducer, {count : 0})

    return(
        <>

        <h1>Counter with useReducer</h1>
        <p>Count : {state.count}</p>
        <button onClick={() => dispatch({type : 'increment'})} >Increment</button>
        <button onClick={() => dispatch({type : 'reset'})} >Reset </button>
        <button onClick={() => dispatch({type : 'decrement'})}  disabled={state.count == 0}>Decrement</button>
        </>
    )
 }; // counter component

 export default Counter;
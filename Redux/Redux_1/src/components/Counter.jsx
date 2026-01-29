import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../action";

export const Counter = () => {

    const dispatch = useDispatch(); // It dispatch the action 

    const count = useSelector(state => state.count)


    return(
        <>
        
        <h1>Counter Application</h1>

       <h3>{count}</h3>

       <button onClick={() => dispatch(decrement())}>-</button>
       <button onClick={() => dispatch(reset())}>Reset</button>
       <button onClick={() => dispatch(increment())}>+</button>


        
        </>
    )
};



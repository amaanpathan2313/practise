import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

const Counter = () => {

    const count = useSelector((state) => state.counter.value);  

    const dispatch = useDispatch();

    return (
        <>

        <h1>Counter using Redux-Toolkit</h1>
            <h2>{count}</h2>

            <button onClick={() => dispatch(decrement())} disabled={count == 0}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
        
        </>
    )
};

export default Counter;
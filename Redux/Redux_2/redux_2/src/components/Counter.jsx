import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/action/counter.action";
import { dark, light } from "../redux/action/them.action";


const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const them = useSelector((state) => state.them.them);

    const dispatch = useDispatch()

    return (
        <>

       {them ? (<h1>White</h1>) : (<h1>Dark</h1>)}
       {them ?
        ( <button onClick={() => dispatch(dark())} > Change Them To DARK</button>) : 
        ( <button onClick={() => dispatch(light())} > Change Them To LIGHT </button>) }
       

        <h2>Counter : {count}</h2>

        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increment())}>+</button>
        
        </>
    )
};

export default Counter;
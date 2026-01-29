import { useState } from "react";
import useCounter from "../../hooks/useCounter";


const Counter = () => {

    const [count, setCount] = useState(0);
    const [previousCount, priCount] = useCounter();

    function counterHandeler(){
        priCount(count)
        setCount((p) => p + 1);

    }
    function counterHandeler2(){
        priCount(count)
        setCount((p) => p - 1);

    }


    return (
        <>

        <h1>Current Count : {count}</h1>
        <h1>Previous Count : {previousCount.current}</h1>

        <button onClick={counterHandeler}>+</button>
        <button onClick={counterHandeler2}>-</button>
        
        </>
    )
};

export default Counter;
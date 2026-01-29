
import { useRef } from "react";

const useCounter = () => {

    const previousCount = useRef();

    const priCount = (count) => {
             previousCount.current = count;
    };

    return [previousCount, priCount];

};

export default useCounter;
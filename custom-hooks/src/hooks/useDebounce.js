import { useEffect, useState } from "react";



const useDebounce = (value, delay = 500) => {

    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {

        let timer = setTimeout(() => {
             setDebounceValue(value)
        }, delay);

        // clean-up function
        return () => clearTimeout(timer)

    }, [value, delay])

  return debounceValue;

}; // function

export default useDebounce;

import { useEffect, useState } from "react";


const useDebounce2 = (search, time = 1000) => {

    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {

        let t = setTimeout(() => {
            setDebounceValue(search)
        },time);

        // clean-up function

        return() => clearTimeout(t)
       
    },[search, time]);

    return debounceValue;

};


export default useDebounce2;
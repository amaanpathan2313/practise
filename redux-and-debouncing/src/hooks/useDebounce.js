import { useEffect, useState } from "react";


const useDebounce = (value, delay = 300) => {

    const [debounceSearch, setDebounceSearch] = useState(value);

    useEffect(() => {

        let timer = setInterval(() => {

            setDebounceSearch(value)

        }, delay);

        // clean-up Function

        return () => clearTimeout(timer)

    }, [delay, value]);

    return debounceSearch;


}; // function

export default useDebounce;
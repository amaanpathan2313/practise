import { useEffect, useState } from "react";

 
 const useDebounce = (search, time = 1000) => {

    const [debounceSearch, setDebounceSearch] = useState("");

    useEffect(() => {

       let timer = setTimeout(() => {

            setDebounceSearch(search)

        }, time);

        // clean-up function

        return () => clearTimeout(timer)

    }, [time, search]);

    return debounceSearch;

 }; // useDebounce

 export default useDebounce;
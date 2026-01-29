import { useEffect, useState } from "react";


const useDebounce = (search, limit = 1000) => {

    const [debounceSearch, setDebounceSearch] = useState("");

    useEffect(() => {

        let time = setTimeout(() => {

            setDebounceSearch(search)

        },limit);

        return() => clearTimeout(time)

    },[search, limit]);

    return debounceSearch;

};

export default useDebounce;
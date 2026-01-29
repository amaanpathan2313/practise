import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

 


 const SearchWithDebounce = () => {

    const [search, setSearch] = useState("");
    const debounceValue = useDebounce(search, 1000);

    useEffect(() => {

        if(debounceValue){
            console.log(debounceValue)
        }

    }, [debounceValue])


    return (<>
     
     <h1>Search With Debounce</h1>


     <input type="text" placeholder="Enter Name" value={search} onChange={(e) => setSearch(e.target.value)} />
    
    </>)

 };  //  SearchWithDebounce


 export default SearchWithDebounce;
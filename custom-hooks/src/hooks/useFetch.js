import { useState } from "react";


const useFetch = () => {

    const [obj, setObj] = useState({
        isLoading : false,
        isError : false,
        data : []
    });

    async function fetchData(api){

        setObj((previous) => ({...previous, isLoading : true, isError : false, data : []}));

        try {

        let response = await fetch(api);
        let data = await response.json();
        
        setObj((previous) => ({...previous, isLoading : false, isError : false, data : data}))
        
    } catch (err) {

        console.log(err.message)
        
            setObj((previous) => ({...previous, isLoading : false, isError : true, data : []}))
            
        }
 


    }; // fetchData
 
  return [fetchData, obj]

};


export default useFetch;
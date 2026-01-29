import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export const FetchData = ({ children }) => {

    const[page, setPage] = useState(1);
    const[limit, setLimit] = useState(5);

 const [data, setData] = useState({
    isLoading : false,
    isError : null,
    data : null
 });

 useEffect(() => {
  getData();
 }, [page])

 async function getData(){
    setData({...data, isLoading : true, isError : null, data : null});
    try {
        
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
              console.log(`Page no ${page}`)

        let data = await response.json();
        
        setData({...data, isLoading : false, isError : false, data : data});
        console.log(data)
        
    } catch (err) {
        setData({...data, isLoading : false, isError : err.message, data : null});
        
    }
 }

  return(

    <userContext.Provider value={{getData, data, setPage, setLimit, page}}>
        {children}
    </userContext.Provider>

  );

};



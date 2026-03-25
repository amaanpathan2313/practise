import { useEffect, useState } from "react";



const useDebouncing = () => {

    const [userInput, setUserInput] = useState("")
    const [searchInput, setSearchInput] = useState("")

     useEffect(() => {

        let timer = setTimeout(() => {
                  setSearchInput(userInput)
        }, 1500);

        return(() => clearTimeout(timer))

     }, [userInput]);



     return {searchInput, setUserInput}
     

}; //  useDebouncing



export default useDebouncing;
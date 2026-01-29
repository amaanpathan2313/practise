import { useState } from "react";

// const { useState } = require("react");

 
 function useToggle(initialValue = false){

    const [them, setThem] = useState(initialValue);

    const toggle = () => {
               setThem((previous) => !previous)
    }; // toggle

    return [them, toggle]

 }; //  useToggle

 export default useToggle;
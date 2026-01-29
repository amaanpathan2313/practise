import { useState } from "react";



const useAdd = () => {

    let [total, setTotal] = useState(0);

    function sum(a = 1, b = 2){
        
        setTotal(a + b)

    }; // sum

    return [sum, total];

}; // useAdd

export default useAdd;
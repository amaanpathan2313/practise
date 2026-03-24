import { useEffect, useState } from "react";

const useLocalStorage = () => {

    const [userObj, setUserObj] = useState({});

    useEffect(() => {

        if(userObj){
            console.log(userObj)
        }

    },[userObj])



    return { setUserObj }



}; //  useLocalStorage

export default useLocalStorage;
import { useEffect, useState } from "react";

const useLocalStorage = () => {

    const [userObj, setUserObj] = useState({});
    const [userData, setUserData] = useState({});

    useEffect(() => {

        if(userObj.name){
             localStorage.setItem("userInfo", JSON.stringify(userObj));
        }

        

    },[userObj.name], getUserData);

    function deleteUser(){
        localStorage.removeItem("userInfo")
    };


    function getUserData(){
         let target = JSON.parse(localStorage.getItem("userInfo"));

         if(!target){
            console.log("Data Not available")
         }
         setUserData(target)
    }



    return { setUserObj, deleteUser, userData, getUserData }



}; //  useLocalStorage

export default useLocalStorage;
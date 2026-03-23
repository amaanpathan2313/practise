import { useEffect, useState } from "react";
import { fetchUsers } from "../../features/users/user.slice";

import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {

const [count, setCount] = useState(0);

const { isError, isLoading, data } = useSelector((state) => state.users);
const dispatch = useDispatch();


  useEffect(() => {
 dispatch(fetchUsers())
  },[]);

  
    useEffect(() => {
            if(data){
                console.log(data)
            }
    }, [data])
    
    
    return (
        <>
        { isLoading && <h1>Loading....</h1> }
        <h1>DashBoard</h1>
        </>
    )

};

export default Dashboard;
import { useEffect, useState } from "react";
import { fetchUsers } from "../../features/users/user.slice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.users);

  useEffect(() =>{ dispatch(fetchUsers())}, []);


  useEffect(() => {
    if(data){
        console.log(data)
    }
  },[data])

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}; // Dashboard

export default Dashboard;

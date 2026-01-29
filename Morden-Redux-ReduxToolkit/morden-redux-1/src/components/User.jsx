import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";

const User = () => {
  const { isLoading, isError, data } = useSelector((state) => state.users);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  
  useEffect(() => {
          if(count == 5){
          dispatch(fetchUsers());
        }
        }, [dispatch, count]);

  if (isLoading) {
    return (
      <>
        {" "}
        <h1>Loading..</h1>{" "}
      </>
    );
  }
  if (isError) {
    return (
      <>
        {" "}
        <h1>Error occur while fetching the data </h1>{" "}
      </>
    );
  }

  return (
    <>
      {data && data.map((ele) => (
            <p key={ele.id}>{ele.id} . {ele.name}</p>
       ))}
    </>
  );
}; // User


export default User;
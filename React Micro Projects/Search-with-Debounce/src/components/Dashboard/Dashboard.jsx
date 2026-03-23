import { useEffect, useState } from "react";
import { fetchUsers } from "../../features/users/user.slice";
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import { fetchPost } from "../../features/posts/post.slice";

const Dashboard = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.users);
  const { postIsLoading, postIsError, postData } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPost());
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if(postData){
      console.log(postData)
    }
  }, [data, postData]);

  return (
    <div className="dashboard-box">
     
      <div className="left-panel">
        <h1>Users Name </h1>

        {isLoading && <h2>Users Loading......</h2>}

        {data && data.map((ele) => <p key={ele.id}>{ele.name} </p>)}
      </div>

      <div className="main-panel">

        {postIsLoading && <h2>Posts Loading......</h2>}


<div className="post-box">
       {postData && postData.map((ele) => {

          let user = data.find((u) => u.id == ele.userId);

          return (
            <div key={ele.id}>
              <h3>UserName : {user.name}</h3>

              <p style={{fontSize : "1.9vh"}}> Title : {ele.title}</p>

              <p>{ele.body}</p>

              </div>
          )

       })}
</div>


           

      </div>
    </div>
  );
}; // Dashboard

export default Dashboard;

 import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "../../features/users/user.slice";
import { fetchPost } from "../../features/posts/post.slice";
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";

const Dashboard = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const { isLoading, data: users } = useSelector((state) => state.users);
  const { postIsLoading, postData: posts } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPost());
  }, [dispatch]);

  
  const userMap = useMemo(() => {
    const map = {};
    users?.forEach((u) => {
      map[u.id] = u.name;
    });
    return map;
  }, [users]);

 
  const filteredPosts = useMemo(() => {
    if (!userName || !users || !posts) return posts;

    const user = users.find((u) => u.name === userName);
    if (!user) return [];

    return posts.filter((post) => post.userId === user.id);
  }, [userName, users, posts]);

  return (
    <div className="dashboard-box">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2>Users</h2>

        {isLoading && <p>Loading users...</p>}

        {users &&
          users.map((user) => (
            <p
              key={user.id}
              onClick={() => setUserName(user.name)}
              style={{ cursor: "pointer" }}
            >
              {user.name}
            </p>
          ))}
      </div>

      {/* MAIN PANEL */}
      <div className="main-panel">
        <h2>Posts</h2>

        {postIsLoading && <p>Loading posts...</p>}

        <div className="post-box">
          {filteredPosts &&
            filteredPosts.map((post) => (
              <div key={post.id} className="post-card">
                <h3>User: {userMap[post.userId]}</h3>
                <p><strong>Title:</strong> {post.title}</p>
                <p>{post.body}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

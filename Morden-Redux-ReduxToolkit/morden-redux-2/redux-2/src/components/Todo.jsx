import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
import { addTodo, removeTodo, statusTodo } from "../features/todo.slice";
import { fetchUser } from "../features/users/users.slice";

const Todo = () => {
  const dispatch = useDispatch(); // To dispatch the action
  const myTodo = useSelector((state) => state.todoList.myTodo);
  const {isLoading, isError, data} = useSelector((state) => state.users)

  const [task, setTask] = useState({
    id: "",
    taskName: "",
    createdAt: "",
    status: false,
  });

//   useEffect(() => {
//     console.log("h",myTodo);
//   }, [onSubmit]);

  function onInputChange(e) {
    const { name, value } = e.target;
    setTask((p) => ({
      ...p,
      [name]: value,
      id: Date.now().toString(),
      createdAt: currentTime,
    }));
    let currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    //  setTask((p) => ({...p, id : Date.now().toString(), createdAt : currentTime, }));
  } // onChange

  function onSubmit(e) {
    e.preventDefault();

    if (!task.taskName) {
      alert("Task is Compulsory");
      return;
    }

    dispatch(addTodo(task));

    //  console.log(task);

    setTask({
      id: "",
      taskName: "",
      createdAt: "",
      status: false,
    });
  } // onSubmit

 

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>

        <div className="todoForm">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="taskName"
              value={task.taskName}
              placeholder="Enter New Task"
              onChange={(e) => onInputChange(e)}
            />
            <button onClick={onSubmit}>Add Todo</button>
          </form>
            <button onClick={() => dispatch(fetchUser())}>Get Users</button>
        </div>

        <div className="todoBox">
          {myTodo && myTodo.map((ele) => (
            <div className="card" key={ele.id}>
                     <h4>Task : {ele.taskName}</h4>
                     <p>Status : {ele.status ?  <span style={{color: 'green'}}> Completed </span> : <span> Pending </span>}</p>
                     <p>created At : {ele.createdAt}</p>
                     <div className="btndiv">
                     <p> {ele.status ?  <span>  </span> : <button onClick={() => dispatch(statusTodo(ele.id))}> Mark as Complete </button>}</p>
                     <button onClick={() => dispatch(removeTodo(ele.id))}>Delete</button>

                     </div>
                       
             </div>
            ))}
        </div>


          { isLoading &&  <h1>Loading....</h1>  }

          { isError &&  <h1>Something went wrong plz try again...</h1>  }

   
         {data && data.map((ele) => (
          <ul>
            <li key={ele.id}>{ele.name}</li>

          </ul>
         ))}

      </div>
    </>
  );
}; // Todo

export default Todo;

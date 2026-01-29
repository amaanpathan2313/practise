import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    DOB: "",
    gender: "",
  });

  function handelChange(e) {
    const { value, name } = e.target;

    setData((p) => ({ ...p, [name]: value }));
  } // onChange

  function handelSubmit(e) {

    if(!data.DOB || !data.email || !data.gender || !data.name ){
      alert("All fields are compulsory !")
      return;
    }

    e.preventDefault();
    console.log(data);

    setData({
      name: "",
      email: "",
      DOB: "",
      gender: "",
    });

    return;
  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={data.name} onChange={(e) => handelChange(e)}/>
        <input type="email" name="email" placeholder="Enter email" value={data.email} onChange={(e) => handelChange(e)}/>
        <input type="date" name="DOB" placeholder="Select DOB" value={data.DOB} onChange={(e) => handelChange(e)}/>

<select value={data.gender} name="gender" onChange={(e) => handelChange(e)}>
  <option value="">Select Gender</option>
  <option value="m">Male</option>
  <option value="f">Female</option>
</select>

<button type="submit">Submit</button>

      </form>
    </>
  );
} //App

export default App;

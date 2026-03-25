import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useDebouncing from "../hooks/useDebouncing";

const UserData = () => {
  //  -----------  hooks --------------------

  const [formVisible, setFormVisible] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    city: "",
  });

  const { setUserObj, deleteUser, getUserData,userData } = useLocalStorage();

  const {searchInput, setUserInput} = useDebouncing();

  useEffect(() => {
    if(userData?.name ){
        console.log(userData)
    }

  },[getUserData,userData ])

  useEffect(() => {
           if(searchInput){
            console.log(searchInput)
           }
  }, [searchInput])

  //  -----------  functions --------------------

  function handelChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({ ...previous, [name]: value }));
  } // handelChange

  function handelSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.city || formData.age == 0) {
      alert("All fields are required ! ");
      return;
    }

    // console.log(formData);

  // Reset form
    setFormData({
      name: "",
      email: "",
      age: "",
      city: "",
    });

    // pass data to hook

    setUserObj(formData);

  } // handelSubmit

  //  -----------  JSX --------------------
  return (
    <>

       <div>
          <input type="text" placeholder="Enter item name" onChange={(e) => setUserInput(e.target.value)} />
       </div>

      <div>
     { formVisible &&  <form onSubmit={handelSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Name"
            onChange={handelChange}
            />
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={handelChange}
            />

          <label htmlFor="">DOB : </label>
          <input type="date" name="age" placeholder="Enter Your Age" value={formData.age} onChange={handelChange} />

          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="Enter City"
            onChange={handelChange}
          />

          <button type="submit">Submit</button>
        </form>}

             <button onClick={() => setFormVisible((pre) => !pre)}>{formData ? "Open form" : "close form"}</button>
             <button onClick={() => getUserData()}>Get Data</button>
             <button onClick={() => deleteUser()}>Remove Data</button>

      </div>
    </>
  );
}; // userData

export default UserData;

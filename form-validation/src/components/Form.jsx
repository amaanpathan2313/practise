import { useState } from "react";


const Form = () => {

    const [user, setUser] = useState({
        name : "",
        email : "",
        age : "",
        gender : ""
    });

    function handelChange(e){
         let {value, name} = e.target;

         setUser((p) => ({...p, [name] : value}))
    }; // handelChange

    function handelSubmit(e){
        e.preventDefault();
        if(!user.name || !user.email || !user.age || !user.gender){
            alert("Fill all details !");
            return;
        }

        console.log(user);

        setUser((p) => ({...p, name : "", email : "", age : "", gender : ""}))


    }


    return(
        <>
        
        <div style={{backgroundColor : 'black', height: '100vh', color: 'white'}}>
            <h1>User Information</h1>

            <form onSubmit={handelSubmit}>

                <input type="text" name="name" value={user.name} onChange={(e) => handelChange(e)} />
                <input type="text" name="email" value={user.email} onChange={(e) => handelChange(e)} />
                <input type="age" name="age" value={user.age} onChange={(e) => handelChange(e)} />
                <select name="gender" value={user.gender} onChange={(e) => handelChange(e)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Fe-male</option>
                </select>

                <button type="submit">Submit</button>

            </form>
        </div>
        </>
    )

}; // Form

export default Form;
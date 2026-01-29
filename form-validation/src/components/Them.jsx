import { useState } from "react";
import './Them.css'

const Them = () => {

    const [them, setThem] = useState(true)

    return(
       <div className={them ? "w" : "b"} style={{height : "100vh"}}>
        
 <button onClick={() => setThem((p) => !p)}>{them ? "To Black" : "To white"}</button>
       </div>
    );

}; // Them


export default Them;
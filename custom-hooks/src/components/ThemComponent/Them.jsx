
 import useToggle from "../../hooks/useToggle";
 import './Them.css'

const Them = () => {

    const [them, toggle] = useToggle();


    return (
        <>

        <div className={`${them ? 'bgb' : 'bgw'}`} >

            
            <button onClick={toggle}>Change Them</button>

        </div>
        
        </>
    )
};


export default Them;
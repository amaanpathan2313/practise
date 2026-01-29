import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import './CustomerDetails.css'


const CustomerDetails = () => {

    const [fetchData, obj] = useFetch()

    useEffect(() => {
          fetchData('https://jsonplaceholder.typicode.com/users')
    }, []);

    if(obj.isLoading){
        return<>Loading...</>
    }
    if(obj.isError){
        return<>Something wants wrong...</>
    }

    if(obj.data){
        console.log(obj.data)
    }

return (
    <>
    
    <h1>Customer Details</h1>

    <div className="container">

        {obj.data && obj.data.map((ele) => (
            <div key={ele.id} className="card">
                <h3>Name : {ele.name}</h3>
                <p>Email : {ele.email}</p>
                <p>work At : <a href={ele.website}>{ele.website}</a>  </p>
            </div>
        ))}

    </div>
    
    
    </>
);

};



export default CustomerDetails;
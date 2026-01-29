import { useContext, useEffect, useState } from "react";
import "./Pagination1.css";
import { userContext } from "../../context/FetchData";

const Pagination = () => {
  const { getData, data, seLimit, setPage, page } = useContext(userContext);

  useEffect(() => {
    getData();
  }, []);

  if (data.isLoading) {
    return <>Loading....</>;
  }
  if (data.isError) {
    return (
      <>
        <p>Error occur while fetching the data</p>
      </>
    );
  }

 


  return (
    <>
      <h1>Pagination On server side</h1>
      <div>

   <div className="container">

    {data.data && data.data.map((ele) => (
         <div className="card" key={ele.id}>
          <p>Title : {ele.title}</p>
          <p> Action :  {ele.completed ? "Completed": "Pending"} </p>    
          <p>{ele.id}</p>  
        </div>

    ))}

   </div>




        <div className="pageDiv">
          <button onClick={() => setPage((p) => p - 1)} disabled={page == 1  }>Previous</button>
          <p>Page No. {page}</p>
          <button onClick={() => setPage((p) => p + 1)}>next</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;

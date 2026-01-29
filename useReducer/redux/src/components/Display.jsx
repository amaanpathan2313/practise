import { useEffect, useReducer, useState } from "react";
import "./Display.css";

const Display = () => {

  function reducer(state, action) {
    switch (action.type) {
      case "FETCH":
        // getData = action.payload
        return state = {
          ...state,
          isLoading: true,
          isError: false,
          data: [],
        };
      case "FETCH_SUCCESS":
        // getData = action.payload
        console.log(action.payload);
        return state = {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILED":
        // getData = action.payload
        // console.log(action.payload)
        return state = {
          ...state,
          isLoading: false,
          isError: true,
          data: [],
        };
     default:
        return state;
    } // switch
  } //  reducer

  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: [],
  });

  const [currentPage, setCurrentPage] = useState(1);

  async function fetchData() {
    dispatch({ type: "FETCH" });
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await response.json();

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: "FETCH_FAILED", payload: err.message });
    }
  } // fetchData

  useEffect(() => {
    fetchData();
  }, []);

  if (state.isLoading) {
    return (
      <>
        {" "}
        <h1>Loading....</h1>{" "}
      </>
    );
  };

  if (state.isError) {
    return (
      <>
        {" "}
        <h1>Error occur while fetching data</h1>{" "}
      </>
    );
  };

  //  Pagination Logic

   const post_per_page = 6;
   const index_of_last_post = currentPage * post_per_page;
   const index_of_1st_post = index_of_last_post - post_per_page;

   const displayPost = state.data.slice(index_of_1st_post, index_of_last_post)
  

  return (
    <>
      <h1>Fetch Data by useReducer</h1>

      <div className="container">
        {displayPost.length > 0 &&
          displayPost.map((ele) => (
            <div className="card" key={ele.id}>
              <h3>Title : {ele.title}</h3>
              <p>No. {ele.id}</p>
            </div>
          ))}
      </div>



      <footer>
        <button onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage == 1}> Privious</button>
        <p>Page No. {currentPage}</p>
        <button  onClick={() => setCurrentPage((p) => p + 1)} >Next</button>
      </footer>
    </>
  );
};

export default Display;

import { useDispatch, useSelector } from "react-redux";
import "./Display.css";
import { useEffect, useState } from "react";
import { fetchPost } from "../../features/fetch/fetch.slice";
import useDebounce from "../../hooks/useDebounce";

const Display = () => {

  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.postData);
  const [currentPage, setCurrentPage] = useState(1);
  const [val, setVal] = useState("")
  const debounceSearch = useDebounce(val, 1000);


  let showPost = [];


  useEffect(() => {

    if(debounceSearch){
       console.log(debounceSearch)
    }

  }, [debounceSearch, data])

  useEffect(() => {
           dispatch(fetchPost())
  }, [dispatch]);

  {isLoading && <h1>  Loading.... </h1>}
  {isError && <h1>  Something Wrong.... </h1>}


  // ---------------    Pagination Logic   ------------------------------

  const post_per_page = 12;

  const index_of_last_post = currentPage * post_per_page;
  const index_of_1st_post = index_of_last_post - post_per_page ;

    showPost = data.slice(index_of_1st_post, index_of_last_post)
   


  // ---------------    Pagination Logic   ------------------------------


  return (
    <>
      <div className="container">
        <h1>Display Post</h1>

        <input type="text" placeholder="Search post" value={val} onChange={(e) => setVal(e.target.value)}/>


                 <div className="display">

                      {showPost && showPost.map((ele) => (
                        <div key={ele.id} className="card">
                              <h3>Title : {ele.title}</h3>
                              <p>{ele.body}</p>
                              <p style={{textAlign: 'center'}}>Post No. {ele.id}</p>
                        </div>
                      ))}

                 </div>

                <footer>
                    <button onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage == 1}>Previous</button>
                    <h4>Page No. {currentPage}</h4>
                    <button onClick={() => setCurrentPage((p) => p + 1)} disabled={showPost.length < post_per_page }>Next</button>
                </footer>

      </div>
    </>
  );
};

export default Display;

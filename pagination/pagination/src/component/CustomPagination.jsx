import { useContext, useEffect, useState } from "react";

const CustomPagination = () => {
  const [obj, setObj] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setObj((previous) =>( { ...previous, isLoading: true, isError: false, data: [] }));
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await response.json();

      console.log(data);
         setObj((previous) =>( { ...previous, isLoading: false, isError: false, data: data }));
    } catch (err) {
      console.log(err.message);
       setObj((previous) =>( { ...previous, isLoading: false, isError: true, data: [] }));
    }
  }
 

  
  const [currentPage, setCurrentPage] = useState(1);



    const post_per_page = 5;
    const index_of_last_post = currentPage * post_per_page;
    const index_of_1st_post = index_of_last_post - post_per_page;
   
    const post = obj.data.slice(index_of_1st_post, index_of_last_post);
  


  return (
    <>
      <div>
        <nav>
          <h1>Custom Pagination</h1>
        </nav>

        <div>
            {post.length > 1 && post.map((ele) => (
                <div key={ele.id}> 
                <h3>Title : {ele.title}</h3>
                <p>{ele.id}</p>
                </div>
            ))}
        </div>

        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage == 1}
        >
          Previous
        </button>
        <p>Page No. {currentPage}</p>
        <button onClick={() => setCurrentPage((p) => p + 1)}>Next</button>
      </div>
    </>
  );
};

export default CustomPagination;

import { useEffect, useReducer, useState } from "react";


const Cart = () => {

      function reducer2(cartState, action){

            switch(action.type){

                case 'ADD':
                const newCart = [...cartState.cart, action.payload];
                console.log(newCart)
                   return {...cartState,
                    cart : newCart}
                case 'REMOVE' :
                    // let newCart = cartState.cart.filter((ele) => ele.id != payload.id)
                    // return cartState = cartState.cart = newCart;
                default :
                   return cartState;
            }; // switch

        };  //  reducer2

    const [cartState, cartDispatch] = useReducer(reducer2, {  cart: [],  total: 0, discount: 0, isLoading: false, history: []  });

    const [currentPage, setCurrentPage] = useState(1);
    
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
    
     
    
      async function fetchData() {
        dispatch({ type: "FETCH" });
        try {
          let response = await fetch("https://fakestoreapi.com/products");
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
    
      // ==================================   Pagination Logic  ================================
    
       const post_per_page = 4;
       const index_of_last_post = currentPage * post_per_page;
       const index_of_1st_post = index_of_last_post - post_per_page;
    
       const displayPost = state.data.slice(index_of_1st_post, index_of_last_post)
      

    return (
        <>
          <>
      <h1>Fetch Data by useReducer</h1>  
      <p>My Cart : {cartState.cart.length}</p>

      <div className="container">
        {displayPost.length > 0 &&
          displayPost.map((ele) => (
            <div className="card" key={ele.id}>
              <h3>Title : {ele.title}</h3>
              <img src={ele.image} alt="" />
              <p>Price : {ele.price} Rs</p>
              <button onClick={() => cartDispatch({type : 'ADD', payload: ele})} >Add To cart</button>
       
              <p>No. {ele.id}</p>
            </div>
          ))}
      </div>



      <footer>
        <button onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage == 1}> Privious</button>
        <p>Page No. {currentPage}</p>
        <button  onClick={() => setCurrentPage((p) => p + 1)} disabled={displayPost.length == 0}>Next</button>
      </footer>
    </>
        
        </>
    )
}; // Cart


export default Cart;

 
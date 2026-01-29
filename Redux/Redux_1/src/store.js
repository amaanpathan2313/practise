
import {createStore} from "redux";
import { counterReducer } from "./reducer";

// Create Store

const store = createStore(counterReducer);

export default store;
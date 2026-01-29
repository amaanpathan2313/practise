import counterReducer from "./counter.reducer";


import { combineReducers } from 'redux';
import themReducer from "./them.reducer";


const rootReducer = combineReducers({

    counter : counterReducer,
    them : themReducer,

});

export default rootReducer;
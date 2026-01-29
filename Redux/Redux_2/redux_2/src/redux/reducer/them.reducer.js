

const initialThem = {
    them : true
};


function themReducer(state = initialThem, action){

    switch(action.type){

        case 'LIGHT':
            return {them : true};
        case 'DARK':
            return {them : false};
        default : 
            return state;

    }; // switch

};

export default themReducer;


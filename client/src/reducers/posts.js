import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default ( posts = [], action) =>{

    switch(action.type){

        case FETCH_ALL:
            // all from database 
            return action.payload;

        case CREATE:
            // add a newly created post to state 
            return [...posts, action.payload];

        case UPDATE:
            // update that post in state to sync with database 
            return posts.map((post) => post._id === action.payload._id ? action.payload : post );
        
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case DELETE:
            // delete a post from database 
            return posts.filter((post) => post._id !== action.payload);

        default:
            return posts;
    }
 }
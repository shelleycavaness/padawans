import { combineReducers } from "redux";
import tree from "./tree";



const createRootReducer = combineReducers({
    tree
});

export default createRootReducer
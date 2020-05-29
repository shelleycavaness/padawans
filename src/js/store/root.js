//importer tout les fichier qui contiennent des variables global
// un reducer= un fichier contenant variable globale
import { combineReducers } from "redux";
import modulestore from "./modulestore";
import skillStore from "./skillStore";
import authStore from "./authStore";

const createRootReducer = combineReducers({
    modulestore,
    skillStore,
    authStore,

});

export default createRootReducer;

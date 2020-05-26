//importer tout les fichier qui contiennent des variables global
// un reducer= un fichier contenant variable globale
import { combineReducers } from "redux";
import tree from "./tree";
const createRootReducer = combineReducers({
  tree,
});

export default createRootReducer;

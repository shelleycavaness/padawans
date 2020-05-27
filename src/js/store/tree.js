// Le fichier tree.js est un reducer
// un reducer c'est un objet qui gere des variable globales

/* store nous permet de creer des variables globales connu par tout les composants
de l'application et que tout les composant sache leur states
====> Le store permet de gerer les states des variables globales
------ chaque variable globale a un state et action et chaque action a obligatoirement un type et  on peu lui affecter une donnée (payload)

1- creation de store
2-configuration du store 
3- root (on defini tout les reducer de notre app)
4-creer un reducer:
4.1 intialiser le state de nos variable globale
4.2 creer l'objet action 
4.3 on appel combineReducer et on  declare tout les variable globale de notre reducer
(cette faut la faire apres avoir creer la variable globale càd à la fin)


*/

import { combineReducers } from "redux";
import api from "../utils/api"; //pour notre appel vers le back (axios) ;-)

// initialisation de notre variable ( valeur par defaut)
const modulesInitialState = {
  collection: null,
  isLoading: false,
};
// modules c'est une variable un objet global connu par tout les composant de notre application
const modules = (state = modulesInitialState, action) => {
  switch (action.type) {
    case "FETCH_MODULES":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_MODULES":
      return {
        ...state,
        collection: action.payload,
        isLoading: false,
      };
    case "CLEAR_MODULES":
      return modulesInitialState;
    default:
      return state;
  }
};
//c'est une fonction qui fait des actions sur notre variable globale modules(reconnu par tout nos composants)
export const fetchModules = () => {
  return (dispatch) => {
    //thunk nous permet de faire de l'asyncrone

    dispatch({
      type: "FETCH_MODULES",
    }); //appel l'action fetch_module (qui prend l'ancien state et met isloding à true)
    api.get("/modules/").then((response) => {
      let result = response.data.data;
      //une fois on a recupéré les modules on appel l'action modifiant le contenu de notre variable modules
      dispatch({
        type: "SET_MODULES",
        payload: result,
      });
    });
  };
};

const treeReducer = combineReducers({
  // declare les variables globales
  modules,
});

export default treeReducer;
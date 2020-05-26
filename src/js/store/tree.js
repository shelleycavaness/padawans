import {
    combineReducers
} from 'redux';
import api from '../utils/api'; //pour notre appel vers le back (axios) ;-)

const treeReducer = combineReducers({
    modules,

});
const modulesInitialState = {
    collection: null,
    isLoading: false
}
// modules c'est une variable un objet connu par tout les composant de notre application 
const modules = (state = modulesInitialState, action) => {
    switch (action.type) {
        case "FETCH_MODULES":
            return {
                ...state, isLoading: true
            }
            case "SET_MODULES":
                return {
                    ...state, collection: action.payload, isLoading: false
                }
                case "CLEAR_MODULES":
                    return modulesInitialState
                default:
                    return state
    }
}
//c'est une fonction qui fait des actions sur notre variable globale modules(reconnu par tout nos composants)
export const fetchModules = () => {
    return dispatch => { //thunk nous permet de faire de l'asyncrone

        dispatch({
            type: 'FETCH_MODULES'
        }); //appel l'action fetch_module (qui prend l'ancien state et met isloding à true)
        api
            .get('/modules/')
            .then(response => {
                let result = response.data.data
                //une fois on a recupéré les modules on appel l'action modifiant le contenu de notre variable modules
                dispatch({
                    type: 'SET_MODULES',
                    payload: result
                });
            })
    }
}


export default treeReducer;
import { combineReducer } from 'redux';
import api, { addAuth } from '../utils/api';
import { setPadawanLocalStorage } from '../utils/local-storage';


//email, password viennent du form declanché par le btn submit
export const connectUser =(email, password ) => {
  return dispatch =>{
    dispatch({ type: "REQUEST_CONNEXION" })
    return api
      .post('/padawans/authenticate/', { email, password } )
      .then(response => {
        let result = response.data.data;
        console.log("result :  ", result)

        console.log("token: ", result.token)

        console.log("padawan: ", result.padawan)
    //si success du back est true - user correctly authenticated (fichier padawans/service back)
        if(result && result.success ){  
          addAuth(result.token)
          setPadawanLocalStorage(result);
          dispatch({ type: "SET_STORAGE" });
          dispatch({ type: "SET_AUTH_TOKEN",  payload: result.token })
          dispatch({ type: "SET_AUTH_PADAWAN",  payload: result.padawan })
          dispatch({ type: "SUCCESS_CONNEXION" })

        }
     })
     .catch( error =>{
          dispatch({ type: "LOGIN_FAILED" })
       if(error.response.data.message) throw error.response.data.message
       throw new Error({ message: "Login failed retry" })
     })
  }
}

const token = (state = null, action) => {
  switch(action.type){
    case "SET_AUTH_TOKEN":
      return action.payload;
    case "CLEAR_AUTH_TOKEN":
      return null;
    default :
      return state;     
  }
}
const padawan = (state = null, action) => {
  switch (action.type) {
    case "SET_AUTH_PADAWAN": 
      return action.payload;
    case "CLEAR_AUTH_PADAWAN":
      return null;
    default:
      return state;
  }
} 
/** une variable qui s'appel isLoding qui a toujours une valeur true ou false 
 * quand je clique sur submit 
 * 1) demande de connexion
 * 2) Appel API et chargement de TOKEN & padawan
 * 3)
 * A)Tout est bon 
 * A .1) recuperer token(local storage)
 * A .2) recuperer padawan(local storage)
 * A .3) Connexion  
 * B) Foirer
 * B .1) message d 'erreurr 
 * B .2) non connexion 
 * 
 */

const isLoading = (state = false, action) => {
    switch (action.type) {
      case "REQUEST_CONNEXION":
      // case "FETCH_PADAWAN":
        return true;
      case "SET_AUTH_PADAWAN": 
      case "SET_AUTH_TOKEN":''
      case "SET_STORAGE":  
      case "LOGIN_FAILED":
      case "SUCCESS_CONNEXION":
        return false;
      default:
        return state;
    }
};

const authReducer = combineReducer({
  token,
  padawan,
  isLoading
})

export default authReducer;
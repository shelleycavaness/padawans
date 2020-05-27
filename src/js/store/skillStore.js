import { combineReducers } from "redux";
import api from "../utils/api";

const skillsInitialState = {
    collection: null,
    isLoading: false
}

const skills = (state = skillsInitialState, action) => {  
  switch (action.type) {
    case "FETCH_SKILLS":
      return {
        ...state, 
        isLoading: true
      };
      case "SET_SKILLS":
        return {
          ...state,
          collection: action.payload,
          isLoading: false
        }
      case "CLEAR_SKILLS":
        return skillsInitialState;
      default: 
      return state;
    }
}
  export const fetchSkills = () => {
    return (dispatch) => {
      dispatch({
          type: "FETCH_SKILLS",   
        })
      api.get("/skills/").then((response) => {
        let result = response.data.data;
        console.log(result);
        dispatch({
         type: "SET_SKILLS",
         payload: result
          })
      }) 
    }
  }
const skillReducer = combineReducers({
    skills,
})
export default skillReducer;
//this is the visual representation of the object we are going to create to stock objects in objects
// {
// 	name: 'Default tree name',
// 	skills: [],
// 	modules: {
//  	collection: [],
//		isLoading: false	
// },
// 	isLoading : false
// }  

import { combineReducers } from 'redux'
import api from '../utils/api'

const name = ( state = null, action) =>{
  switch (action.type) {
    case 'SET_TREE_NAME' :
	  return action.payload
	case 'Clear_TREE_NAME' :
	  return null	
	default: 
	  return state
  }
}

const modulesInitialState = {
  collection: null,
  isLoading: false
}

const skillsInitialState={
  collection:null,
  isLoading: false	
}

export const fetchModules = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_MODULES' });
	  api
	    .get('/modules/')
		.then(response => {
		  let result = response.data.data
		    console.log('****************', result)
			dispatch({ type: 'SET_MODULES', payload: result });
		})
	}
}
export const fetchSkills = () => {
	return dispatch => {
	  dispatch({ type: 'FETCH_SKILLS' });
		api
		  .get('/skills/')
		  .then(response => {
			let result = response.data.data
			  console.log('################### skills: ', result)
			  dispatch({ type: 'SET_SKILLS', payload: result });
		  })
	  }
  }

const modules = (state = modulesInitialState, action) => {
  switch (action.type) {
    case "FETCH_MODULES":
	  return { ...state, isLoading: true }
	case "SET_MODULES":
	  return { ...state, 
		collection: action.payload, 
		isLoading: false }
	case "CLEAR_MODULES":
	  return modulesInitialState
	default:
	  return state
  }
}

const skills = (state = skillsInitialState, action) => {
	switch (action.type) {
	  case "FETCH_SKILLS":
		return { ...state, isLoading: true }
	  case "SET_SKILLS":
		return { ...state, 
		  collection: action.payload, 
		  isLoading: false }
	  case "CLEAR_SKILLS":
		return skillsInitialState
	  default:
		return state
	}
  }
  


const treeReducer = combineReducers({
	name,
	modules,
	skills,
})

export default treeReducer;

// console.log('///////////////////////////', treeName)


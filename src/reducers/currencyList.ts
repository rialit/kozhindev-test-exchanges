

import {Actions} from "../actions/currencyList"


const initialState = {

	items: [],
	isLoad: false,
	errorText: "",
	lastUpdate: ""

}


export default function(state = initialState, action ){

	switch (action.type){

		case Actions.ADD_ITEMS : return {...state, items: action.payload}
		case Actions.SET_LOAD : return {...state, isLoad: action.payload}
		case Actions.SET_ERROR : return {...state, errorText: action.payload}
		case Actions.SET_LAST_UPDATE : return {...state, lastUpdate: action.payload}

		default: return state

	}

}
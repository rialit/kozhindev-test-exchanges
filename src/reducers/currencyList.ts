

import {Actions} from "../actions/currencyList"


const initialState = {

	items: [],
	isLoad: false

}


export default function(state = initialState, action ){

	switch (action.type){

		case Actions.ADD_ITEMS : return {...state, items: action.payload}

		default: return state

	}

}

import {Actions} from "../actions/currencyList"
import {baseCurrency, reCountCurrency} from "../api/baseCurrency"

const initialState = {

	items: reCountCurrency(baseCurrency),
	isLoad: true,
	errorText: "1",
	lastUpdate: 0,
	changes:{
		left: {
			input: "0",
			select: localStorage.getItem('left') ? +localStorage.getItem('left') : 1
		},
		right: {
			input: "0",
			select: localStorage.getItem('right') ? +localStorage.getItem('right') : 2
		}
	}
}

export default function(state = initialState, action ){

	switch (action.type){

		case Actions.ADD_ITEMS : return {...state, items: action.payload}
		case Actions.SET_LOAD : return {...state, isLoad: action.payload}
		case Actions.SET_ERROR : return {...state, errorText: action.payload}
		case Actions.SET_LAST_UPDATE : return {...state, lastUpdate: action.payload}

		case Actions.SET_INPUT : return {
			...state, changes: {
				...state.changes, 
				[action.payload.name]: {
					...state.changes[action.payload.name], 
					input: action.payload.value
				}
			} 
		}

		case Actions.SET_SELECT : return {
			...state, changes: {
				...state.changes, 
				[action.payload.name]: {
					...state.changes[action.payload.name], 
					select: action.payload.value
				}
			} 
		}

		default: return state

	}

}
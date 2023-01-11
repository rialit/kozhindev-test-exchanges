

import {combineReducers} from "redux"

import {form, auth, fields, list, notifications, modal, router, screen} from '@steroidsjs/core/reducers';

import currencyList from "./currencyList"


export default (asyncReducers) => {

	return combineReducers({
		form,
		auth,
		fields,
		list,
		notifications,
		modal,
	    screen,
	    currencyList,
	    ...asyncReducers,
	    router: (state, action) => router(asyncReducers.router ? asyncReducers.router(state, action) : {}, action),
	});
}
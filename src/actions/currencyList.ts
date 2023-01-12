


/*

import {Irate} from '../reducers/initialize';
import {
    getRatesArray,
    IFormState,
} from '../reducers/rates';
import {RootState} from '../reducers';
import calculate from '../Utils/calculate';
import {baseCurrency, selectedCurrency} from '../api/api';

export enum RatesActionEnum {
    SET_RATES = 'SET_RATES',
    SET_FORM_1 = 'SET_FORM_1',
    SET_FORM_2 = 'SET_FORM_2',
}
interface IsetForm1 {
    type:RatesActionEnum.SET_FORM_1,
    payload:IFormState
}
interface IsetForm2 {
    type:RatesActionEnum.SET_FORM_2,
    payload:IFormState
}
interface IsetRates {
    type:RatesActionEnum.SET_RATES,
    payload:Irate
}

export type IRatesAction = IsetForm1 | IsetForm2 | IsetRates

export const setForm1 = (payload:IFormState):IRatesAction => ({
    type: RatesActionEnum.SET_FORM_1,
    payload,
});
export const setForm2 = (payload:IFormState):IRatesAction => ({
    type: RatesActionEnum.SET_FORM_2,
    payload,
});
export const setRates = (payload:Irate):IRatesAction => ({
    type: RatesActionEnum.SET_RATES,
    payload,
});

export const updateForm1 = (newInputValue:string) => (dispatch, getState:()=>RootState) => {
    const state = getState();
    const initiatorFormState = {
        input: newInputValue,
        select: state.rates.form1.select,
    };
    const slaveSelect = state.rates.form2.select;
    const currencyWithRate = getRatesArray([...baseCurrency, ...selectedCurrency])(state);
    const newSlaveValue = calculate(initiatorFormState, slaveSelect, currencyWithRate);
    dispatch([
        setForm1(initiatorFormState),
        setForm2({ select: slaveSelect, input: newSlaveValue.replace('.', ',') }),
    ]);
};

export const updateForm2 = (newInputValue:string) => (dispatch, getState:()=>RootState) => {
    const state = getState();
    const initiatorFormState = {
        input: newInputValue,
        select: state.rates.form2.select,
    };
    const slaveSelect = state.rates.form1.select;
    const currencyWithRate = getRatesArray([...baseCurrency, ...selectedCurrency])(state);
    const newSlaveValue = calculate(initiatorFormState, slaveSelect, currencyWithRate);
    dispatch([
        setForm2(initiatorFormState),
        setForm1({ select: slaveSelect, input: newSlaveValue.replace('.', ',') }),
    ]);
};


*/

import {request} from "api/updateCurrency"
import axios from "axios"

export const Actions = {
	ADD_ITEMS: "ADD_ITEMS",
    SET_LOAD:  "SET_LOAD",
    SET_ERROR:  "SET_ERROR",
    SET_LAST_UPDATE:  "SET_LAST_UPDATE",
}


// export default 

interface itemCurrency {
    code: String,
    name: String,
    value: Number,
    forRUB: Number,
    forUSD: Number,
    forCNY: Number
    forEUR: Number
}

export const addItems = (payload:Array<itemCurrency>) => ({
    type: Actions.SET_LAST_UPDATE,
    payload,
});

export const setLoad = (payload:Boolean) => ({
    type: Actions.SET_LOAD,
    payload,
});

export const setError = (payload:String) => ({
    type: Actions.SET_ERROR,
    payload,
});

export const setLastUpdate = (payload:String) => ({
    type: Actions.SET_LAST_UPDATE,
    payload,
});

export const updateList = () => async (dispatch)=>{

	// setLoad()

    dispatch(setLoad(true))

    axios({method: "GET", url: "https://www.cbr-xml-daily.ru/daily_json.js"})
    .then(res=>{

        dispatch(setError(""))

    })
    .catch(res=>{
        console.log(res)
        if(res && res.code && res.code == "ERR_NETWORK"){
            dispatch(setError("Отсутствует интернет соединение"))
        } else {
            dispatch(setError("Ошибка соединения"))
        }

        dispatch(setLoad(false))

    })

    setTimeout(()=>{
        dispatch(setLoad(false))
    }, 300)


} 
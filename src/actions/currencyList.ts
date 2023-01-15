


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

import {transformCurrenct} from "../api/updateCurrency"
import {reCountCurrency} from "../api/baseCurrency"
import axios from "axios"

export const Actions = {
	ADD_ITEMS: "ADD_ITEMS",
    SET_LOAD:  "SET_LOAD",
    SET_ERROR:  "SET_ERROR",
    SET_LAST_UPDATE:  "SET_LAST_UPDATE",

    SET_INPUT: "SET_INPUT",
    SET_SELECT: "SET_SELECT"
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
    type: Actions.ADD_ITEMS,
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

export const setLastUpdate = (payload:Number) => ({
    type: Actions.SET_LAST_UPDATE,
    payload,
});

interface changeInputPayload{
    name: string,
    value: string
}

export const setInput = (payload:changeInputPayload) => ({
    type: Actions.SET_INPUT,
    payload,
});

export const setSelect = (payload:changeInputPayload) => ({
    type: Actions.SET_SELECT,
    payload,
});

export const getSelect = (name: string) => (dispatch, state) => {

    const selectValue = state().currencyList.changes[name].select;
    const select = state().currencyList.items.filter(e=>e.id==selectValue)

    return select[0]
}

export const changeInput = (name: string, value: string, reqName: string) => (dispatch, state) => {

    console.log("value", value)

    // let strValue = value.replace(".", ",")

    let strValue = value.replace(",", ".")

    console.log(strValue, value)

    dispatch(setInput({name, value:strValue}))

    const select1 = dispatch(getSelect(name));
    const select2 = dispatch(getSelect(reqName));

    let valueInt = +(value.replace(",", "."))

    let resVal = (select1.value / select2.value ) * (valueInt)

    console.log(select1, select2, resVal)


    dispatch(setInput({name:reqName, value:resVal+""}))

}

export const changeSelect = (name: string, value: string, reqName: string) => (dispatch, state) => {

    dispatch(setSelect({name, value}))

    const valueInput = state().currencyList.changes[name].input

    dispatch(changeInput(name, valueInput, reqName))

}


export const updateList = () => async (dispatch, state)=>{

    let load = state().currencyList.isLoad 

    dispatch(setLoad(true))

    return axios({method: "GET", url: "https://www.cbr-xml-daily.ru/daily_json.js"})
    .then(res=>{
        dispatch(setError(""))
        let items = state().currencyList.items
        let transformCurrenctItems = transformCurrenct(items, res.data.Valute)
        let updateCurrency = reCountCurrency(transformCurrenctItems)
        dispatch(addItems(updateCurrency))
        dispatch(setLastUpdate( (new Date()).getTime() ))
    })
    .catch(res=>{
        dispatch(setError( res?.code == "ERR_NETWORK" ? "Отсутствует интернет соединение" : "Ошибка соединения" ))
    })
    .finally(()=>{
        dispatch(setLoad(false))
    })

} 
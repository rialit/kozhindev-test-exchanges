
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

interface itemCurrency {
    id: number,
    code: string,
    name: string,
    value: number,
    forRUB: number,
    forUSD: number,
    forCNY: number
    forEUR: number
}

export const addItems = (payload:Array<itemCurrency>) => ({
    type: Actions.ADD_ITEMS,
    payload,
});

export const setLoad = (payload:boolean) => ({
    type: Actions.SET_LOAD,
    payload,
});

export const setError = (payload:string) => ({
    type: Actions.SET_ERROR,
    payload,
});

export const setLastUpdate = (payload:number) => ({
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

    // let strValue = value.replace(".", ",")

    let strValue = value.replace(",", ".")

    dispatch(setInput({name, value:strValue}))

    const select1 = dispatch(getSelect(name));
    const select2 = dispatch(getSelect(reqName));

    let valueInt = +(value.replace(",", "."))

    let resVal = (select1.value / select2.value ) * (valueInt)

    resVal = resVal.toFixed(4)

    dispatch(setInput({name:reqName, value:resVal+""}))

}

export const changeSelect = (name: string, value: string, reqName: string) => (dispatch, state) => {

    dispatch(setSelect({name, value}))

    localStorage.setItem(name, value);

    const valueInput = state().currencyList.changes[name].input

    dispatch(changeInput(name, valueInput, reqName))

}


export const updateList = () => async (dispatch, state)=>{

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
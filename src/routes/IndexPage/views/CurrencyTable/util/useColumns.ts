import  {useMemo} from 'react';
import CurrencyColumn from '../views/CurrencyColumn';
import CurrencyValue from '../views/CurrencyValue/CurrencyValue';

const Columns = [
    {label: 'ID', attribute: 'id'},
    {label: 'Код', attribute: 'code', sortType: "string"},
    {label: 'Название валюты', attribute: 'name', sortType: "string"},
    {label: 'RUB', attribute: 'forRUB'},
    {label: 'USD', attribute: 'forUSD'},
    {label: 'CNY', attribute: 'forCNY'},
    {label: 'EUR', attribute: 'forEUR'},
];

export interface changeSortInterface{
    (sortAttribute:string, sortType:string, type:string): void
}

export default (className:string, changeSort:changeSortInterface)=>{
    return useMemo(()=>{
        return Columns.map(column =>{

            return{
                ...column,
                headerView: CurrencyColumn,
                valueView: CurrencyValue,
                headerProps:{onSort : (type:string = "ASC")=>changeSort(column.attribute, column?.sortType ? column?.sortType : "number", type)},
                className,
                valueProps: {label: column.label},
            }
    
        })
    }, [])
}
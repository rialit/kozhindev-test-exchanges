import  React, {useEffect, useState, useMemo} from 'react';
import './CurrencyTable.scss';
import {useBem, useComponents, useSelector, useFetch, useDispatch} from '@steroidsjs/core/hooks';
import Grid from "@steroidsjs/core/ui/list/Grid"


import {Button, InputField} from '@steroidsjs/core/ui/form';
import Icon from '@steroidsjs/core/ui/icon/Icon';
import { updateList, setError } from 'actions/currencyList';

import useColumns, {changeSortInterface} from './util/useColumns';
import { numberSort, stringSort } from './util/sorting';


export default function CurrencyTable():JSX.Element {
    const bem = useBem('CurrencyTable');

    let itemsBase = useSelector(state=>state.currencyList.items)
    let isLoad = useSelector(state=>state.currencyList.isLoad)

    let [sort, setSort] = useState({sortAttribute: "id", sortType: "number", type: "ASC"})
    let [hide, setHide] = useState(true)
    let [searchText, setSearchText] = useState("")

    let items = useMemo(()=>{

        let resultItems = [...itemsBase]

        if(sort.sortType == "number"){
            resultItems.sort((a,b)=>{
                return numberSort(a[sort.sortAttribute], b[sort.sortAttribute], sort.type == "ASC");
            })
        }

        if(sort.sortType == "string"){
            resultItems.sort((a,b)=>{
                return stringSort(a[sort.sortAttribute], b[sort.sortAttribute], sort.type == "ASC");
            })
        }

        if(searchText){
            let lowText = searchText.toLocaleLowerCase()
            resultItems = resultItems.filter((currency)=>{
                if(~currency.code.toLocaleLowerCase().indexOf(lowText)){
                    return true
                }

                if(~currency.name.toLocaleLowerCase().indexOf(lowText)){
                    return true
                }

                return false
            })
        }

        return hide ? resultItems.slice(0,10) : resultItems

    }, [itemsBase, sort, hide, searchText])

    const changeSort:changeSortInterface = (sortAttribute, sortType, type)=>{

        if(sortAttribute && sortType && type){
            setSort({sortAttribute, sortType, type})
        }

    }
 
    const columns = useColumns(bem.element("table-value-item"), changeSort)

    return (
        <div className={bem.block()}>

            <div className={bem.element("sarch")}>
                <InputField 
                    placeholder='Поиск'
                    value={searchText}
                    onChange={(text:string)=>setSearchText(text)}
                />
                {searchText && 
                    <Icon 
                        name="reject" 
                        onClick={()=>setSearchText("")}
                        className={bem.element("search-icon-close")}
                    />
                }
            </div>

            <div className={bem.element("table")} >
                <Grid
                    listId='CurrencyTable'
                    items={items}
                    columns={columns}
                    className={bem.element("grid")}
                    isLoading={isLoad}
                    
                />   
                <div className={bem.element("button")}>
                    <Button 
                        onClick={()=>setHide(old=>!old)}
                        outline
                    >
                        {hide ? "Показать все" : "Скрыть"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

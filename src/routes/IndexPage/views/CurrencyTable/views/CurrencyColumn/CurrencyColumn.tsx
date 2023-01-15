import  React from 'react';
import './CurrencyColumn.scss';
import {useBem} from '@steroidsjs/core/hooks';


import Icon from "@steroidsjs/core/ui/icon/Icon"


export interface CurrencyColumnProps{
    attribute: string,
    label: string,
    listId: string,
    headerView: (props:CurrencyColumnProps)=>{},
    onSort: (type:string)=>{}
}


export default function CurrencyColumn(props:CurrencyColumnProps):JSX.Element {
    const bem = useBem('CurrencyColumn');
   
    return (
        <div className={bem.block()}>

            <div className={bem.element("text")}>
                {props.label}
            </div>

            <div className={bem.element("icons")}>
                <Icon name="arrowSortUp" className={bem.element("buttom-sort")} onClick={()=>props.onSort("ASC")} />
                <Icon name="arrowSortDown" className={bem.element("buttom-sort")} onClick={()=>props.onSort("DESC")} />
            </div>
        </div>
    );
}

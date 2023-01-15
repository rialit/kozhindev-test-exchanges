import  React, {useEffect} from 'react';
import './CurrencyValue.scss';
import {useBem, useComponents, useSelector, useFetch, useDispatch} from '@steroidsjs/core/hooks';
import Grid from "@steroidsjs/core/ui/list/Grid"
import axios from "axios"

import Button from '@steroidsjs/core/ui/form/Button/Button';
import { updateList } from 'actions/currencyList';

import Icon from "@steroidsjs/core/ui/icon/Icon"


export interface CurrencyValueProps{
    attribute: string,
    label: string,
    listId: string,
    
}


export default function CurrencyValue(props:any) {
    const bem = useBem('CurrencyValue');

    useEffect(()=>{
        console.log("render value")
    }, [])

    

    return (
        <div className={bem.block()} data-label={props.label}>

            {props.item[props.attribute]}
        </div>
    );
}

import  React, {useEffect, useState} from 'react';
import './IndexPage.scss';
import {useBem, useDispatch} from '@steroidsjs/core/hooks';
import CurrencyTable from "./views/CurrencyTable"
import Header from "./views/Header"
import CurrencyChange from './views/CurrencyChange';
import { updateList } from 'actions/currencyList';


export default function IndexPage() {
    const bem = useBem('IndexPage');
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(updateList())
    // }, [])


    return (
        <div className={bem.block()}>
            
            <div className={bem.element("header-wrap")}>
                <Header />
                <CurrencyChange />
            </div>

            <CurrencyTable />

        </div>
    );
}

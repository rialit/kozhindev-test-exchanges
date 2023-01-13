import  React, {useEffect} from 'react';
import './CurrencyTable.scss';
import {useBem, useComponents, useSelector, useFetch, useDispatch} from '@steroidsjs/core/hooks';
import Grid from "@steroidsjs/core/ui/list/Grid"
import axios from "axios"

import Button from '@steroidsjs/core/ui/form/Button/Button';
import { updateList } from 'actions/currencyList';

const columns = [
    {
        label: 'ID',
        attribute: 'id',
        sortable: true,
    },
    {
        label: 'Код',
        attribute: 'code',
        sortable: true,
    },
    {
        label: 'Название валюты',
        attribute: 'name',
        sortable: true,
    },
    {
        label: 'RUB',
        attribute: 'forRUB',
        sortable: true,
    },
    {
        label: 'USD',
        attribute: 'forUSD',
        sortable: true,
    },
    {
        label: 'CNY',
        attribute: 'forCNY',
        sortable: true,
    },
    {
        label: 'EUR',
        attribute: 'forEUR',
        sortable: true,
    },
];

export default function CurrencyTable() {
    const bem = useBem('CurrencyTable');

    let items = useSelector(state=>state.currencyList.items)

    return (
        <div className={bem.block()}>

            <div className={bem.element("table")} >
                <Grid
                    listId='CurrencyTable'
                    items={items}
                    columns={columns}
                    className={bem.element("grid")}
                    pagination={{
                        loadMore: true,
                    }}
                    paginationSize={{
                        defaultValue: 10,
                        sizes: [10, 20, 30]
                    }}

                    load={true}

                />   
                
            </div>
        </div>
    );
}

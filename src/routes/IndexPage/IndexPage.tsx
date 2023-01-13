import  React from 'react';
import './IndexPage.scss';
import {useBem} from '@steroidsjs/core/hooks';
import Button from '@steroidsjs/core/ui/form/Button/Button';
import CurrencyTable from "./views/CurrencyTable"



export default function IndexPage() {
    const bem = useBem('IndexPage');


    return (
        <div className={bem.block()}>
            
            <CurrencyTable />

        </div>
    );
}

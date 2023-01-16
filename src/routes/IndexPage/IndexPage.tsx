import  React from 'react';
import './IndexPage.scss';
import {useBem} from '@steroidsjs/core/hooks';
import CurrencyTable from "./views/CurrencyTable"
import Header from "./views/Header"
import CurrencyChange from './views/CurrencyChange';
import Wraper from 'shared/Wraper';


export default function IndexPage():JSX.Element {
    const bem = useBem('IndexPage');

    return (
        <div className={bem.block()}>
            
            <div className={bem.element("header-wrap")}>
                <Wraper>
                    <Header />
                    <CurrencyChange />
                </Wraper>
            </div>
            <Wraper>
                <CurrencyTable />
            </Wraper>

        </div>
    );
}

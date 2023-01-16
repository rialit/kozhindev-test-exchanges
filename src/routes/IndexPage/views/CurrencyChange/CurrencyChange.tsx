import  React, {useMemo} from 'react';
import './CurrencyChange.scss';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import CurrencySelect from './views/CurrencySelect';
import {Currency} from "api/baseCurrency"
import Icon from '@steroidsjs/core/ui/icon/Icon';


export default function CurrencyChange():JSX.Element {
    const bem = useBem('CurrencyChange');
    let itemsBase = useSelector(state=>state.currencyList.items)

    let items = useMemo(()=>{
        return itemsBase.map((item:Currency)=>{
            return {
                id: item.id,
                label: item.code
            }
        })
    }, [itemsBase])

    return (
        <div className={bem.block()}>

            <CurrencySelect 
                items={items} 
                name="left"
                reqName='right'
            />

            <div className={bem.element("icon")}>
                <Icon name="arrowsChange" />
            </div>
            <CurrencySelect 
                items={items} 
                name="right"
                reqName='left'
            />
            
        </div>
    );
}
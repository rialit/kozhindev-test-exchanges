import  React, {useEffect, useState, useMemo} from 'react';
import './CurrencyChange.scss';
import {useBem, useComponents, useSelector, useFetch, useDispatch} from '@steroidsjs/core/hooks';
import CurrencySelect from './views/CurrencySelect';
import {Currency} from "api/baseCurrency"
import Icon from '@steroidsjs/core/ui/icon/Icon';


export default function CurrencyChange():JSX.Element {
    const bem = useBem('CurrencyChange');
    let itemsBase = useSelector(state=>state.currencyList.items)

    let [input1, setInput1] = useState("");
    let [input2, setInput2] = useState("");
    let [select1, setSelect1] = useState(1);
    let [select2, setSelect2] = useState(2);

    let items = useMemo(()=>{
        return itemsBase.map((item:Currency)=>{
            return {
                id: item.id,
                label: item.code
            }
        })
    }, [itemsBase])

    let change1 = (text)=>{
        console.log("change1")
        setInput1(text);
        setInput2(text+1)
    }

    return (
        <div className={bem.block()}>

            <CurrencySelect 
                items={items} 
                valueInput={input1}
                onChangeInput={change1}
                valueSelect={select1}
                onChangeSelect={setSelect1}
                name="left"
                reqName='right'
            />

            <div className={bem.element("icon")}>
                <Icon name="arrowsChange" />
            </div>
            <CurrencySelect 
                items={items} 
                valueInput={input2}
                onChangeInput={setInput2}
                valueSelect={select2}
                onChangeSelect={setSelect2}
                name="right"
                reqName='left'
            />
            
        </div>
    );
}
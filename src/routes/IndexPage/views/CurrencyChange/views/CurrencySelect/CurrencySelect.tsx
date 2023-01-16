import  React from 'react';
import './CurrencySelect.scss';
import {useBem, useSelector, useDispatch} from '@steroidsjs/core/hooks';
import { DropDownField, NumberField } from '@steroidsjs/core/ui/form';

import { DataProviderItems } from '@steroidsjs/core/hooks/useDataProvider';
import { changeInput, changeSelect } from 'actions/currencyList';


interface CurrencyChangeProps{
    items: DataProviderItems
    name: string,
    reqName: string
}

export default function CurrencySelect(props:CurrencyChangeProps):JSX.Element {
    const bem = useBem('CurrencySelect');
    const dispatch = useDispatch()

    let valueInput = useSelector(state=>state.currencyList.changes[props.name].input)
    let valueSelect = useSelector(state=>state.currencyList.changes[props.name].select)

    const onChangeInput = (text:string)=>{
        dispatch(changeInput(props.name, text, props.reqName))
    }

    const onChangeSelect = (value:string)=>{
        dispatch(changeSelect(props.name, value, props.reqName))
    }

    return (
        <div className={bem.block()}>

            <div className={bem.element("form")}  >
                <NumberField 
                    className={bem.element("input")} 
                    value={valueInput}
                    onChange={onChangeInput}
                    step={"0.1"}
                />

                <div>
                    <DropDownField 
                        className={bem.element("select")} 
                        items={props.items} 
                        autoComplete
                        value={valueSelect}
                        onChange={onChangeSelect}
                    />
                </div>
            </div>
            
        </div>
    );
}


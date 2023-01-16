import  React, {useEffect} from 'react';
import './CurrencyValue.scss';
import {useBem} from '@steroidsjs/core/hooks';

export interface CurrencyValueProps{
    attribute: string,
    label: string,
    listId: string,
    
}

export default function CurrencyValue(props:any) {
    const bem = useBem('CurrencyValue');

    return (
        <div className={bem.block()} data-label={props.label}>
            {props.item[props.attribute]}
        </div>
    );
}

import  React from 'react';
import './Header.scss';
import {useBem, useDispatch} from '@steroidsjs/core/hooks';

import Icon from '@steroidsjs/core/ui/icon/Icon' 
import Link from '@steroidsjs/core/ui/nav/Link'

import { updateList } from 'actions/currencyList';
import useLastUpdate from './util/useLastUpdate';

export default function Header():JSX.Element {
    const bem = useBem('Header');
    const dispatch = useDispatch()
    let lastUpdate = useLastUpdate()

    return (
        <div className={bem.block()}>

            <div className={bem.element("logo")}>
                <Icon name="logo" />
                Конвертер Валют
            </div>

            
            <Link 
                className={bem.element("update")}
                onClick={()=>dispatch(updateList())}
            >
                <div className={bem.element("update-icon")}>
                    <Icon name="reLoad"/>
                </div>
                <div className={bem.element("update-state")}>
                    <span>Последнее обновление</span>
                    <span>{lastUpdate}</span>
                </div>
            </Link>
            
            
        </div>
    );
}

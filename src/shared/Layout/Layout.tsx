import * as React from 'react';

import {useBem, useDispatch, useSelector} from '@steroidsjs/core/hooks';
import useLayout, {STATUS_OK, STATUS_LOADING} from '@steroidsjs/core/hooks/useLayout';

import {Loader, Notifications} from '@steroidsjs/core/ui/layout';
import Header from '@steroidsjs/core/ui/layout/Header';

import './Layout.scss';
import {ROUTE_ROOT} from '../../routes';
import { updateList } from 'actions/currencyList';

export default function Layout(props: React.PropsWithChildren<any>) {
    const bem = useBem('Layout');
    // const isLoad = useSelector(state=>state.currencyList.isLoad)
    let [isLoad, setLoad] = React.useState(true)
    const dispatch = useDispatch()

    const {status} = useLayout(/*() => components.http.post('/api/v1/init', {
        timestamp: Date.now(),
        
    })*/
        
    );

    React.useEffect(()=>{
        dispatch(updateList()).then(()=>setLoad(false))
        console.log("load")
    }, [])

    if (status !== STATUS_OK) {
        return status !== STATUS_LOADING ? status : null;
    }

    console.log(status)

    return (
        <div className={bem.block()}>
            
            {isLoad && <div className={bem.element("loader")}>
                <Loader />
            </div>}
            
            {!isLoad &&<div className={bem.element('content')}>
                <Notifications />
                {props.children}
            </div>}
        </div>
    );
}

import * as React from 'react';
import {useBem, useDispatch} from '@steroidsjs/core/hooks';
import useLayout, {STATUS_OK, STATUS_LOADING} from '@steroidsjs/core/hooks/useLayout';
import {Loader, Notifications} from '@steroidsjs/core/ui/layout';
import './Layout.scss';
import { updateList } from 'actions/currencyList';

export default function Layout(props: React.PropsWithChildren<any>) {
    const bem = useBem('Layout');
    let [isLoad, setLoad] = React.useState(true)
    const dispatch = useDispatch()

    const {status} = useLayout(/*() => components.http.post('/api/v1/init', {
        timestamp: Date.now(),
    })*/
    );

    React.useEffect(()=>{
        dispatch(updateList()).then(()=>setLoad(false))
    }, [])

    if (status !== STATUS_OK) {
        return status !== STATUS_LOADING ? status : null;
    }

    return (
        <div className={bem.block()}>
            
            {isLoad && 
                <div className={bem.element("loader")}>
                    <Loader />
                </div>
            }
            
            {!isLoad &&
                <div className={bem.element('content')}>
                    <Notifications />
                    {props.children}
                </div>
            }
        </div>
    );
}

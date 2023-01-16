import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import './Wraper.scss';


export default function Wraper(props: React.PropsWithChildren<any>) {
    const bem = useBem('Wraper');

    return (
        <div className={bem.block()}>
            {props.children}
        </div>
    );
}

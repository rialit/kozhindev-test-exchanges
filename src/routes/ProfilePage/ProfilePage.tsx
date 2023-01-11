import * as React from 'react';

import './ProfilePage.scss';
import {useBem} from '@steroidsjs/core/hooks';

export default function ProfilePage() {
    const bem = useBem('ProfilePage');

    return (
        <div className={bem.block()}>
            Profile
        </div>
    );
}

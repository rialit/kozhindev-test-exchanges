import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import IndexPage from './IndexPage';
import ProfilePage from './ProfilePage';

export const ROUTE_ROOT = 'root';
export const ROUTE_PROFILE = 'profile';

const roles = [null];

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    roles,
    items: {
        [ROUTE_PROFILE]:{
            label: __('Профиль'),
            path: '/profile',
            component: ProfilePage
        }
    }
} as IRouteItem;

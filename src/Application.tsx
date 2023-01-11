import useApplication from '@steroidsjs/core/hooks/useApplication';
import HttpComponent from '@steroidsjs/core/components/HttpComponent';
import LocaleComponent from '@steroidsjs/core/components/LocaleComponent';

import 'style/index.scss';

import currencyList from "./reducers/currencyList"

export default function Application() {



    // const refTest = require('@steroidsjs/core/reducers').default

    // console.log(refTest({currencyList}))


    const {renderApplication} = useApplication({
        // reducers: require('@steroidsjs/core/reducers').default,

        reducers: require('reducers').default,


        routes: () => require('routes').default,
        layoutView: () => require('shared/Layout').default,
        screen: true,
        components: {
            locale: LocaleComponent,
            http: HttpComponent,
        },
        onInit: (main) => {
            console.log("main", main)

            let ui = main.ui

            ui.addViews(require('./ui/bootstrap').default);
            ui.addFields(require('@steroidsjs/core/ui/form').default);
            ui.addFormatters(require('@steroidsjs/core/ui/format').default);
            ui.addIcons(require('./icons').default);
        },
    });

    return renderApplication();
}

import {useSelector} from '@steroidsjs/core/hooks';
import { useMemo } from 'react';


export default function(){
    
    let lastUpdate = useSelector(state=>state.currencyList.lastUpdate)

    return useMemo(()=>{
        let date = new Date(lastUpdate)

        let resDate = "";
        resDate += date.getDate()+" ";
        resDate += mounth[date.getMonth()]+" ";
        resDate += date.getHours()+":";
        resDate += date.getMinutes()+"";
        return resDate
    }, [lastUpdate])
}

const mounth = [
    "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
]
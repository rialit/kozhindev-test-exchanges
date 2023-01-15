
import axios from "axios"

export function transformCurrenct(stateCurrency, requestValue) {

    return stateCurrency.map(currency => {

        return {
            ...currency,
            value: (requestValue[currency.code] ? requestValue[currency.code].Value : 1)
        }

    })
    
}
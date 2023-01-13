
import axios from "axios"

export async function transformCurrenct(stateCurrency, requestValue) {

    return stateCurrency.map(currency => {

        return {
            ...currency,
            value: (requestValue[currency.cod] ? requestValue[currency.cod].Value : 1)
        }

    })
    
}
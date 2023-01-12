
import axios from "axios"

export async function request() {

    return axios({method: "GET", url: "https://www.cbr-xml-daily.ru/daily_json.js"})
    .then(res=>res.data)
    
}
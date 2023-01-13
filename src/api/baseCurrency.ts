
// value / value 


export const baseCurrency = [
	{ id: 1, code: "RUB", name: "Русский рубль", value: 1 },
	{ id: 2, code: "USD", name: "Доллар США", value: 67.7775 },
	{ id: 3, code: "EUR", name: "Евро", value: 72.7908 },
	{ id: 4, code: "CNY", name: "Китайский юань", value: 10.0016 },
	{ id: 5, code: "AUD", name: "Австралийский доллар", value: 46.9224 },
	{ id: 6, code: "AZN", name: "Азербайджанский манат", value: 39.8691 },
	{ id: 7, code: "GBP", name: "Фунт стерлингов Соединенного королевства", value: 82.2141 },
	{ id: 8, code: "AMD", name: "Армянских драмов", value: 17.1021 },
	{ id: 9, code: "BYN", name: "Белорусский рубль", value: 25.8102 },
	{ id: 10, code: "BGN", name: "Болгарский лев", value: 37.2424 },
	{ id: 11, code: "BRL", name: "Бразильский реал", value: 13.0299 },
	{ id: 12, code: "HUF", name: "Венгерских форинтов", value: 18.2748 },
	{ id: 13, code: "HKD", name: "Гонконгских долларов", value: 86.95 },
	{ id: 14, code: "DKK", name: "Датских крон", value: 97.9373 },
	{ id: 15, code: "INR", name: "Индийских рупий", value: 81.9585 },
	{ id: 16, code: "KZT", name: "Казахстанских тенге", value: 14.6641 },
	{ id: 17, code: "CAD", name: "Канадский доллар", value: 50.486 },
	{ id: 18, code: "KGS", name: "Киргизских сомов", value: 79.1054 },
	{ id: 19, code: "MDL", name: "Молдавских леев", value: 35.3282 },
	{ id: 20, code: "NOK", name: "Норвежских крон", value: 68.0094 },
	{ id: 21, code: "PLN", name: "Польский злотый", value: 15.5528 },
	{ id: 22, code: "RON", name: "Румынский лей", value: 14.7821 },
	{ id: 23, code: "XDR", name: "СДР (специальные права заимствования)", value: 90.9208 },
	{ id: 24, code: "SGD", name: "Сингапурский доллар", value: 50.9452 },
	{ id: 25, code: "TJS", name: "Таджикских сомони", value: 66.2122 },
	{ id: 26, code: "TRY", name: "Турецких лир", value: 36.0999 },
	{ id: 27, code: "TMT", name: "Новый туркменский манат", value: 19.365 },
	{ id: 28, code: "UZS", name: "Узбекских сумов", value: 59.863 },
	{ id: 29, code: "UAH", name: "Украинских гривен", value: 18.3556 },
	{ id: 30, code: "CZK", name: "Чешских крон", value: 30.316 },
	{ id: 31, code: "SEK", name: "Шведских крон", value: 64.5635 },
	{ id: 32, code: "CHF", name: "Швейцарский франк", value: 72.8008 },
	{ id: 33, code: "ZAR", name: "Южноафриканских рэндов", value: 40.1216 },
	{ id: 34, code: "KRW", name: "Вон Республики Корея", value: 54.4048 },
	{ id: 35, code: "JPY", name: "Японских иен", value: 51.3855 }
]


export const reCountCurrency = (currencyList)=>{

	let RUB, USD, EUR, CNY = 0;

	currencyList.map(e=>{
		switch (e.code){
			case "RUB" : RUB = e.value
			case "USD" : USD = e.value
			case "EUR" : EUR = e.value
			case "CNY" : CNY = e.value
		}
	})

	return currencyList.map(currency => {

		return {
			...currency,
			forRUB: +(currency.value/RUB).toFixed(4),
			forUSD: +(currency.value/USD).toFixed(4),
			forEUR: +(currency.value/EUR).toFixed(4),
			forCNY: +(currency.value/CNY).toFixed(4),
		}

	})


}

function floor(number){



}
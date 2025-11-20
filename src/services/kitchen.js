export async function getData() {
    const API_KEY = "9af2fc2bacc0402e8605f4b413df76e7"
    // const URL = "https://jellybellywikiapi.onrender.com/api/beans?sugarFree=false"
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=pasta`

    const res = await fetch(URL)
    const data = await res.json()
    
    return data.results
}

export function currencyConverter (number) {
        const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
        return currency
}

export function editString(str, maxChar) {
    if (str.length >= maxChar) {
        const string = str.slice(0, maxChar - 3)
        const newStr = `${string}...`
        return newStr
    } else {
        return str
    }
}
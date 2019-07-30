/*
const getCountryInfo = theName => {
    axios.get(`https://restcountries.eu/rest/v2/name/${theName}`)
        .then(responseFromAPI => printInfo(responseFromAPI.data))
        .catch(err => console.log('Error is: ', err))
}
*/




const restCountriesApi = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/name/'       // URL base de la API externa
})

const getCountryInfo = theName => {
    restCountriesApi.get(theName)                           // Argumento: endpoint de la API externa
        .then(responseFromAPI => printInfo(responseFromAPI.data))
        .catch(err => console.log('Error is: ', err))
}

const printInfo = data => {
    document.getElementById('countryName').innerText = data[0].name
    document.getElementById('countryCapital').innerText = data[0].capital
}


// Event handler
document.getElementById('theButton').onclick = () => {
    const inputValue = document.getElementById('theInput').value
    getCountryInfo(inputValue)
}
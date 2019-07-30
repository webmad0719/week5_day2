
const starWarsAPI = axios.create({
    baseURL: 'https://swapi.co/api'
})


starWarsAPI.get('people')
    .then(response => printCharts(response.data.results))
    .catch(err => console.log('error', err))


const printCharts = info => {
    showBarChart('q1', info)
    doughnutChart('q2', info, 200)
    showPolarChart('q3', info, 200)
    showMixedChart('q4', info, 200)
}





const showBarChart = (id, info) => {
    new Chart(id, {
        type: 'horizontalBar',
        data: {
            labels: info.map(character => character.name),
            datasets: [{
                label: 'Movies made',
                data: info.map(character => character.films.length),
                borderColor: 'rgba(0, 50, 250, .7)',
                backgroundColor: 'rgba(0, 250, 50, .2)',
                borderWidth: 1
            }]
        }
    })
}


const doughnutChart = (id, info, height) => {

    height ? document.getElementById(id).height = height : null

    new Chart(id, {
        type: 'doughnut',
        data: {
            labels: ['Male gender', 'Female gender'],
            datasets: [{
                label: 'Gender rate',
                data: [
                    info.filter(character => character.gender === 'male').length,
                    info.filter(character => character.gender === 'female').length
                ],
                borderColor: [
                    'rgba(0, 50, 250, .7)',
                    'rgba(0, 250, 50, .7)'
                ],
                backgroundColor: [
                    'rgba(0, 50, 250, .2)',
                    'rgba(0, 250, 50, .2)'
                ]
            }]
        },
        options: {
            legend: {
                position: 'left'
            }
        }
    })
}




const showPolarChart = (id, info, height) => {
    height ? document.getElementById(id).height = height : null
    new Chart(id, {
        type: 'polarArea',
        data: {
            labels: ['Orange eyes', 'Brown eyes', 'Yellow eyes', 'Red eyes', 'Black eyes'],
            datasets: [{
                data: [
                    info.filter(character => character.eye_color.includes('orange')).length,
                    info.filter(character => character.eye_color.includes('brown')).length,
                    info.filter(character => character.eye_color.includes('yellow')).length,
                    info.filter(character => character.eye_color.includes('red')).length,
                    info.filter(character => character.eye_color.includes('black')).length
                ],
                borderColor: 'white',
                borderWidth: 2,
                backgroundColor: [
                    'rgba(0, 50, 250, .2)',
                    'rgba(0, 250, 50, .2)',
                    'rgba(0, 50, 250, .2)',
                    'rgba(0, 250, 50, .2)',
                    'rgba(0, 50, 250, .2)']
            }]
        },
        options: {
            legend: {
                position: 'left'
            }
        }
    })
}



const showMixedChart = (id, data, height) => {
    height ? document.getElementById(id).height = height : null
    new Chart(id, {
        type: 'bar',
        data: {
            labels: data.map(character => character.name),
            datasets: [{
                label: 'Height',
                data: data.map(character => character.height),
                borderColor: 'rgba(0, 50, 250, .7)',
                borderWidth: 1,
                backgroundColor: 'rgba(0, 250, 50, .2)'
            },
            {
                label: 'Mass',
                data: data.map(character => character.mass),
                borderColor: 'rgba(0, 50, 250, .7)',
                borderWidth: 1,
                type: 'line'
            }]
        }
    })
}





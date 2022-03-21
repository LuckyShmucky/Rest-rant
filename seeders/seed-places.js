const Place = require('../models/index.js')

let seedData = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/InO.jpg',
    founded: 2020
}]
// .then(() =>{
//     console.log('Success')
//     process.exit()
// })
// .catch(err => {
//     console.log('FAILED', err)
//     process.exit()
// })

module.exports = seedData
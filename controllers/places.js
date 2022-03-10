const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places})
})
//what this file is basically doing is 
//it finds the index.jsx file (via places/index)
//and gives that file access to our places array.
//the index.jsx file has to decide from their what 
//to do with this data. In this instance it 
//displays the data to the user 
module.exports = router
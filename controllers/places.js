const router = require('express').Router()


let places = [{
  name: 'In and Out',
  city: 'San Diego',
  state: 'CA',
  cuisines: 'Burgers and Fries',
  pic: '/images/InO.jpg'
}, {
  name: 'Coding Cake Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: 'http://placekitten.com/250/250'
}]



router.get('/', (req, res) => {
    // let places = [{
    //     name: 'In and Out',
    //     city: 'San Diego',
    //     state: 'CA',
    //     cuisines: 'Burgers and Fries',
    //     pic: '/images/InO.jpg'
    //   }, {
    //     name: 'Coding Cake Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     pic: 'http://placekitten.com/250/250'
    //   }]
    res.render('places/index', {places})
    // return places
})

router.get('/new', (req, res)=>{
  res.render('places/new')
})

router.post('/new', (req, res)=> {
  places.push(req.body)
  res.send(places)
  // res.redirect('/places')
})

//what this file is basically doing is 
//it finds the index.jsx file (via places/index)
//and gives that file access to our places array.
//the index.jsx file has to decide from their what 
//to do with this data. In this instance it 
//displays the data to the user 
module.exports = router
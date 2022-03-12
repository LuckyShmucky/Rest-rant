const express = require('express')
// const { append } = require('express/lib/response')
const router = express.Router()
const places = require('../models/places.js')


// router.use(express.json())

router.get('/', (req, res) => {
  
    res.render('places/index', {
      places: places
    })
})

router.get('/new', (req, res)=>{
  res.render('places/new')
})



router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//what this file is basically doing is 
//it finds the index.jsx file (via places/index)
//and gives that file access to our places array.
//the index.jsx file has to decide from their what 
//to do with this data. In this instance it 
//displays the data to the user 
module.exports = router
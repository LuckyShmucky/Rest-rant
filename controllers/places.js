const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const places = require('../models/places.js')
const Place = require('../models/index.js')

// router.use(express.json())
//Display root places 
router.get('/', (req, res) => {
  Place.find()
    .then((places) =>{
      res.render('places/index', {places})
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.get('/new', (req,res)=>{
  res.render('places/new')
})

//SHOW or Display
router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

  //CREATE
router.post('/', (req, res) => {
  Place.create(req.body)
  .then(()=>{
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

  //DELETE 
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id], id })
//   }
// })


router.put('/:id', (req, res) => {
  res.send("PUT /places/:id stub")
})


router.get('/:id/edit', (req, res) => {
 res.send(' GET edit form stub')
})

router.post('/:id/rant', (req, res)=>{
  res.send("GET /places/:id/rant stub")
})

router.delete('/:id/rant/:rantId', (req, res)=>{
  res.send('GET /places/:id/rant/:rantId stub')
})



//what this file is basically doing is 
//it finds the index.jsx file (via places/index)
//and gives that file access to our places array.
//the index.jsx file has to decide from their what 
//to do with this data. In this instance it 
//displays the data to the user 
module.exports = router
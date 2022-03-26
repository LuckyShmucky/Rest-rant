const express = require('express')
const req = require('express/lib/request')
const { append } = require('express/lib/response')
const router = express.Router()
// const places = require('../models/places.js')
const Place = require('../models/index.js')
const seedData = require('../seeders/seed-places.js')
const seedComment = require('../seeders/seed-comments.js')

// router.use(express.json())
//Display root places 
router.get('/', (req, res) => {
  Place.find()
    .then((foundPlaces) =>{
      res.render('places/index', {places: foundPlaces})
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})
////creating seed comments route
router.get('/seed-comments', async (req, res) =>{
  const thisPlace = await Place.findOne({name: "Chum Bucket"})
  const comment = await Place.Comment.create({
    author: "Mr.Krabs",
    rant: false, 
    stars: 5.0,
    content: "You'll never get me secret formula!"
  })
  thisPlace.comments.push(comment.id)
  await thisPlace.save()
  res.redirect('/places')
  // process.exit()
})

router.get('/new', (req,res)=>{
  res.render('places/new')
})

//SHOW or Display
router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
  .populate('comments')
  .then(foundPlace => {
    console.log(foundPlace)
      res.render('places/show',  {
        place: foundPlace 
      })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


//this path allows us to add the seed data (still not made yet)
router.get('/data/seed', (req, res) =>{
   res.send(Place.insertMany(seedData) + "Place.insertMany(seedData)")
  Place.insertMany(seedData)
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
   Place.findByIdAndDelete(req.params.id)
   .then(deletedBread =>{
     res.status(303).redirect('/places')
   })
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
  Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedPlace => {
    console.log(updatedPlace)
    res.redirect(`/places/${req.params.id}`)
  })
})

//directs user to edit page
router.get('/:id/edit', (req, res) => {
 Place.findById(req.params.id)
 .then(foundPlace =>{
   res.render('places/edit', {
     place: foundPlace
   })
 })
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
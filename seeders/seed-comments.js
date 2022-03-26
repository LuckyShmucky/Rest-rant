// const Place = require('../models')

// let seedComment = {
//     author: "Mr.Krabs",
//     rant: false, 
//     stars: 5.0,
//     content: 'Wow, simply amazing! Best patties in the Ocean!'
// }

// module.exports = seedComment

// // console.log(Place)
// // To use await, we need an async function.
// async function seed() {
//     // console.log({Place})
//     // Get the place, H-Thai-ML
//     let place = await Place.find({name: "Chum Bucket"})
//     let comment = await Place.Comment.create({
//         author: "Sandy Cheeks",
//         rant: false, 
//         stars: 5.0,
//         content: 'Wow, simply amazing! Best patties in the Ocean!'
//     })

//     place.comments.push(comment.id)

//     await place.save()
//     process.exit()
    
// }

// seed()


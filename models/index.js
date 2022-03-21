const req = require('express/lib/request')
require('dotenv').config()

// console.log(require('dotenv').config())
const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopolgy: true
// })
// console.log(mongoUri)
const placeSchema = new mongoose.Schema({

name: {type: String, require: true},
pic: String, 
cuisines: {type: String, required: true},
city: {type: String, default: 'Anytown'},
state: {type: String, default: "USA"},
founded: Number

})
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopolgy: true
// })
const Place = mongoose.model('Place', placeSchema)
module.exports = Place
module.exports.Place = require('./places')
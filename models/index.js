// const req = require('express/lib/request')
require('dotenv').config()

// console.log(require('dotenv').config())
const mongoose = require('mongoose')
const seedData = require('../seeders/seed-comments.js')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopolgy: true
})
// console.log(mongoUri)
const placeSchema = new mongoose.Schema({

name: {type: String, require: true},
pic: {type: String, default: 'http://placekitten.com/350/350'}, 
cuisines: {type: String, required: true},
city: {type: String, default: 'Anytown'},
state: {type: String, default: "USA"},
founded: {
    type: Number,
    min: [1673, 'surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
},
comments: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Comment'
}]

}, {toJSON: {virtuals: true}})
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopolgy: true
// })

placeSchema.methods.showEstablished = function(){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded} `
}

const Place = mongoose.model('Place', placeSchema)
module.exports = Place
module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
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
pic: {type: String, default: 'http://placekitten.com/350/350'}, 
cuisines: {type: String, required: true},
city: {type: String, default: 'Anytown'},
state: {type: String, default: "USA"},
founded: {
    type: Number,
    min: [1673, 'surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
}

})
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
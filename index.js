const mongoose = require('mongoose')

require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  function(){ console.log('connected to mongo: ') }
)
//Express setttings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
//routes need to be aware of the other middleware so make sure they
//they are places under other middlerware
app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/places', (req, res) =>{
    res.render('index')
})


app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)


require('dotenv').config()
const express = require('express')
const app = express()
//Express setttings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
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

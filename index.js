
require('dotenv').config()
const express = require('express')
const app = express()
//Express setttings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/places', require('./controllers/places'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

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

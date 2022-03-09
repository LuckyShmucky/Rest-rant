
require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('Hello world home page')
})

app.get('/places', (req, res) =>{
    res.render('index')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)

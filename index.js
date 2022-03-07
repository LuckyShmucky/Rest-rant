require('dotenv').config()

const express = require('express')
const app = express()


app.use('/places', require('./controllers/places'))

app.get('/', function(req, res){
    res.send('<h1>Home page</h1>')
    console.log('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
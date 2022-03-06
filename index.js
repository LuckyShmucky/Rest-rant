const express = require('express')
const app = express()


app.get('/', function(req, res){
    console.log('Hello World')
})

app.listen(process.env.PORT)
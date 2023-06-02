const express = require('express')
const route = require('./config/routes')
const app = express()

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));

//require mongoose
require('./config/mongo');

//require route
app.use(route)


let port = 1600
app.listen(port, ()=> console.log(`app is on ${port}`))
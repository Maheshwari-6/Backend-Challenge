const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mkhatkalli:fivestars@cluster0.hu2qcm3.mongodb.net/')
.then(res => console.log('DB is connected'))
.catch(err => console.log(err))
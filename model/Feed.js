const moment = require('moment/moment');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userFeed = new schema({
    name :{
        type: String, 
        required : true
    },

    message :{
        type: String, 
        required : true
    },

    create_at:{
        type: Date,
        default:Date.now,
        get: function(createAt){
            return moment(createAt).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}, {timestamps:true})


module.exports = mongoose.model('Feed', userFeed)
const mongoose = require('mongoose');

const customerRegister = new mongoose.Schema({
    //name,email,phone,city
    lookingFor:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true 
    }

})

module.exports = mongoose.model('customerRegister', customerRegister);
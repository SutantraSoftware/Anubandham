const mongoose = require('mongoose');

const casteSchema = new mongoose.Schema({
    casteName:{
            type:String,
        },
        casteValue:{
            type:String
        }
    

})

module.exports = mongoose.model('Caste', casteSchema);
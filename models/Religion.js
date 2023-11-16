const mongoose = require('mongoose');

const religionSchema = new mongoose.Schema({
    
    regionName:{
            type:String,
        },
        regionValue:{
            type:String
        }
    

})

module.exports = mongoose.model('Religion', religionSchema);
const mongoose = require('mongoose');

const religionSchema = new mongoose.Schema({
    religionName:{
            type:String,
        },
        religionValue:{
            type:String
        }
    

})

module.exports = mongoose.model('Religion', religionSchema);
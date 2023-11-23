const mongoose = require('mongoose');

const mothertongueSchema = new mongoose.Schema({
    mothertongueName:{
            type:String,
        },
        mothertongueValue:{
            type:String
        }
    

})

module.exports = mongoose.model('Mothertongue', mothertongueSchema);
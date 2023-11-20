const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
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
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    birthTime:{
        type:String,
        default:false
    },
    birthPlace:{
        type:String,
        default:false
    },
    religion:{
        type:String,
        required:true
    },
    motherTongue:{
        type:String,
        required:true
    },
    caste:{
        type:String,
        required:true
    },
    subCaste:{
        type:String,
        required:true
    },
    gouthram:{
        type:String,
        required:true
    },
    otherCasteAccept:{
        type:Boolean,
        default:false
    },
    maritalStatus:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    familyStatus:{
        type:String,
        required:true
    },
    familyType:{
        type:String,
        required:true
    },
    disability:{
        type:Boolean,
        default:false
    },
    rashi:{
        type:String,
    },
    nakshatram:{
        type:String
    },
    requirements:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String
    },
    hobbis:{
        type:String,
        
    },
    habbits:{
        type:String,
        required:true
    },
    professional:{
        education:{
            type:String
        },
        employement:{
            type:String
        },
        occupation:{
            type:String
        },
        income:{
            type:String
        },
        workLocation:{
            type:String
        },
        state:{
            type:String
        },
        city:{
            type:String
        },
        citizenShip:{
            type:String
        },
        residentStatus:{
            type:String
        },
        notes:{
            type:String
        }
    },
    family:{
        fatherName:{
            type:String
        },
        fatherOccupation:{
            type:String
        },
        motherName:{
            type:String
        },
        motherOccupation:{
            type:String
        },
        siblings:{
            type:String
        },
        siblingsOccupation:{
            type:String
        }
    }
})


module.exports = mongoose.model('Profile', profileSchema);
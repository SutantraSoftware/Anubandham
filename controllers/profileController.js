const Profile = require('../models/Profile')

const createProfile = async(req,res)=>{
    try{
        const {
        userName,
        firstName,
        lastName,
        email,
        phone,
        gender,
        dob,
        birthTime,
        birthPlace,
        religion,
        motherTongue,
        caste,
        subCaste,
        gouthram,
        otherCasteAccept,
        maritalStatus,
        height,
        weight,
        familyStatus,
        familyType,
        disability,
        rashi,
        nakshatram,
        requirements,
        bloodGroup,
        hobbis,
        habbits,
        professional,
        family
    } = req.body

        const profile = new Profile({
            userName,
            firstName,
            lastName,
            email,
            phone,
            gender,
            dob,
            birthTime,
            birthPlace,
            religion,
            motherTongue,
            caste,
            subCaste,
            gouthram,
            otherCasteAccept,
            maritalStatus,
            height,
            weight,
            familyStatus,
            familyType,
            disability,
            rashi,
            nakshatram,
            requirements,
            bloodGroup,
            hobbis,
            habbits,
            professional,
            family
        })
        await profile.save()
        res.status(201).json(profile)
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
}

const getProfiles = async(req,res)=>{
    try{
        const profiles = await Profile.find();
        res.status(200).json(profiles)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const singleProfile = async(req,res)=>{
    try{
        const profile = await Profile.findById(req.params.id);
        if(!profile){
            res.status(404).json({message:'Profile Not Found'})
        }
        res.status(200).json(profile)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const updateProfile = async(req,res)=>{
    try{
        const {userName,
            firstName,
            lastName,
            email,
            phone,
            gender,
            dob,
            birthTime,
            birthPlace,
            religion,
            motherTongue,
            caste,
            subCaste,
            gouthram,
            otherCasteAccept,
            maritalStatus,
            height,
            weight,
            familyStatus,
            familyType,
            disability,
            rashi,
            nakshatram,
            requirements,
            bloodGroup,
            hobbis,
            habbits,
            professional,
            family
        } = req.body
        const myProfile = await Profile.findByIdAndUpdate(req.params.id,{
            userName,
            firstName,
            lastName,
            email,
            phone,
            gender,
            dob,
            birthTime,
            birthPlace,
            religion,
            motherTongue,
            caste,
            subCaste,
            gouthram,
            otherCasteAccept,
            maritalStatus,
            height,
            weight,
            familyStatus,
            familyType,
            disability,
            rashi,
            nakshatram,
            requirements,
            bloodGroup,
            hobbis,
            habbits,
            professional,
            family
        });
        if(!myProfile){
            res.status(404).json({message:'Profile Not Found'})
        }
        res.status(200).json(myProfile)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}


const deleteProfile = async(req,res)=>{
    try{
        const deleteProfileId = await Profile.findByIdAndDelete(req.params.id);
        
        res.status(204).send()
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

module.exports = {createProfile,getProfiles,singleProfile,updateProfile,deleteProfile}
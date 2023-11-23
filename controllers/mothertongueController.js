const Mothertongue = require('../models/Mothertongue')

const createMothertongue = async(req,res)=>{
    try{
        const {mothertongueName,mothertongueValue} = req.body

        const addmothertongue = new Mothertongue({
            mothertongueName,mothertongueValue
        })
        await addmothertongue.save()
        res.status(201).json(addmothertongue)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const getMothertongues = async(req,res)=>{
    try{
        const getmothertongue = await Mothertongue.find();
        res.status(200).json(getmothertongue)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}



module.exports = {createMothertongue,getMothertongues}
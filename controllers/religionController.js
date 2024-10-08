const Religion = require('../models/Religion')

const createReligion = async(req,res)=>{
    try{
        const {religionName,religionValue} = req.body

        const addreligion = new Religion({
            religionName,religionValue
        })
        await addreligion.save()
        res.status(201).json(addreligion)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const getReligions = async(req,res)=>{
    try{
        const getreligion = await Religion.find();
        res.status(200).json(getreligion)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}



module.exports = {createReligion,getReligions}
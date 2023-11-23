const Caste = require('../models/Caste')

const createCaste = async(req,res)=>{
    try{
        const {casteName,casteValue} = req.body

        const addcaste = new Caste({
            casteName,casteValue
        })
        await addcaste.save()
        res.status(201).json(addcaste)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const getCaste = async(req,res)=>{
    try{
        const getcaste = await Caste.find();
        res.status(200).json(getcaste)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}



module.exports = {createCaste,getCaste}
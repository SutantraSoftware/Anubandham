const customerRegister = require('../models/customerRegister')

const createCustomer = async(req,res)=>{
    try{
        const {lookingFor,email,phone,password,userName} = req.body
        const customer = new customerRegister({
            lookingFor,email,phone,password,userName
        })
        await customer.save()
        res.status(201).json(customer)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const getCustomer = async(req,res)=>{
    try{
        const getCustomers = await customerRegister.find();
        res.status(200).json(getCustomers)
    }catch(error){
        
        console.log(error)
        res.status(500).json(error)

    }
}

const getSingleCustomer = async(req,res)=>{
    try{
        const singleCustomer = await customerRegister.findById(req.params.id);
        if(!singleCustomer){
            res.status(404).json({message:'Employee Not Found'})
        }
        res.status(200).json(employee)
    }catch(error){

        console.log(error)
        res.status(500).json(error)
    }
}

const updateCustomer = async(req,res)=>{
    try{
        const {lookingFor,email,phone,password,userName} = req.body
        const myCustomer = await customerRegister.findByIdAndUpdate(req.params.id,{
            lookingFor,email,phone,password,userName
        });
        if(!myCustomer){
            res.status(404).json({message:'Customer Not Found'})
        }
        res.status(200).json(myCustomer)
    }catch(error){

        console.log(error)
        res.status(500).json(error)
    }
}


const deleteCustomer = async(req,res)=>{
    try{
        const deleteEmployeeId = await customerRegister.findByIdAndDelete(req.params.id);
        
        res.status(204).send()
    }catch(error){
        
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {createCustomer,getCustomer,getSingleCustomer,updateCustomer,deleteCustomer}
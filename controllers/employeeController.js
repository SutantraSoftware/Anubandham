const Employee = require('../models/Employee')

const createEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city,role} = req.body

        const employee = new Employee({
            name,
            email,
            phone,
            city,
            role
        })
        await employee.save()
        res.status(201).json(employee)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const getEmployees = async(req,res)=>{
    try{
        const employees = await Employee.find();
        res.status(200).json(employees)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const singleEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id);
        if(!employee){
            res.status(404).json({message:'Employee Not Found'})
        }
        res.status(200).json(employee)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const updateEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city,role} = req.body
        const myEmployee = await Employee.findByIdAndUpdate(req.params.id,{
            name,email,phone,city,role
        });
        if(!myEmployee){
            res.status(404).json({message:'Employee Not Found'})
        }
        res.status(200).json(myEmployee)
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}


const deleteEmployee = async(req,res)=>{
    try{
        const deleteEmployeeId = await Employee.findByIdAndDelete(req.params.id);
        
        res.status(204).send()
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

module.exports = {createEmployee,getEmployees,singleEmployee,updateEmployee,deleteEmployee}
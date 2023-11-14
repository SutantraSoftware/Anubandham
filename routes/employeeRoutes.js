const express = require('express');
const router = express.Router();

const employeeController =  require('../controllers/employeeController')
const Employee =  require('../models/Employee')


//GET,POST PUT and DELETE

router.post("/add-emp",employeeController.createEmployee)

router.get("/getAllEmployees",employeeController.getEmployees)

router.get("/getEmployee/:id",employeeController.singleEmployee)

router.put("/updateEmployee/:id",employeeController.updateEmployee)


router.delete("/deleteEmployee/:id",employeeController.deleteEmployee)

module.exports = router;
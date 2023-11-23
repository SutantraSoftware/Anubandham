const express = require('express');
const router = express.Router();
var cors = require('cors')


const userRegister =  require('../controllers/customerRegisterController')
const customerRoutes =  require('../models/customerRegister')


//GET,POST PUT and DELETE
router.post("/login",cors(),userRegister.loginUser)

router.post("/add-register-user",cors(),userRegister.createCustomer)

router.get("/getAllCustomers",cors(),userRegister.getCustomer)

router.get("/getCustomer/:id",cors(),userRegister.getSingleCustomer)

router.put("/updateCustomer/:id",cors(),userRegister.updateCustomer)


router.delete("/deleteCustomer/:id",cors(),userRegister.deleteCustomer)

module.exports = router;
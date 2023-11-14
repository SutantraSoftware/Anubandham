const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const employeeRoutes = require('./routes/employeeRoutes')

const {MongoClient} = require('mongodb');

const app = express();

const PORT = 5050;

dotEnv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb is started Successfully!!")
}).catch((error)=>{
    console.log(error)
})

app.use('/employees',employeeRoutes)

app.listen(PORT,()=>{
    console.log(`Server Started Successfully @ ${PORT}`);
})
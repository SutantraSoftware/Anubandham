const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =  require('cors');

const employeeRoutes = require('./routes/employeeRoutes')
const religionRoutes = require('./routes/religionRoutes')
const profileRoutes = require('./routes/profileRoutes')

const {MongoClient} = require('mongodb');

const app = express();

const PORT = 5050;

dotEnv.config()
var whitelist = ['http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb is started Successfully!!")
}).catch((error)=>{
    console.log(error)
})

app.use('/employees',employeeRoutes)
app.use('/religions',religionRoutes)
app.use('/profiles',profileRoutes)

app.listen(PORT,()=>{
    console.log(`Server Started Successfully @ ${PORT}`);
})
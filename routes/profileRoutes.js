const express = require('express');
const router = express.Router();
var cors = require('cors')


const ProfileController =  require('../controllers/profileController')
const Profile =  require('../models/Profile')


//GET,POST PUT and DELETE

router.post("/add-profile",cors(),ProfileController.createProfile)

router.get("/getAllProfiles",cors(),ProfileController.getProfiles)

router.get("/getProfile/:id",cors(),ProfileController.singleProfile)

router.put("/updateProfile/:id",cors(),ProfileController.updateProfile)


router.delete("/deleteProfile/:id",cors(),ProfileController.deleteProfile)

module.exports = router;
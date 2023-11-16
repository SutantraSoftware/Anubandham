const express = require('express');
const router = express.Router();

const ProfileController =  require('../controllers/profileController')
const Profile =  require('../models/Profile')


//GET,POST PUT and DELETE

router.post("/add-profile",ProfileController.createProfile)

router.get("/getAllProfiles",ProfileController.getProfiles)

router.get("/getProfile/:id",ProfileController.singleProfile)

router.put("/updateProfile/:id",ProfileController.updateProfile)


router.delete("/deleteProfile/:id",ProfileController.deleteProfile)

module.exports = router;
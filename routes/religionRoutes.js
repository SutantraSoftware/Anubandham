const express = require('express');
const router = express.Router();

const religionController =  require('../controllers/religionController')
const Religion =  require('../models/Religion')


//GET,POST PUT and DELETE

router.post("/religions",religionController.createReligion)

router.get("/getReligions",religionController.getReligions)


module.exports = router;
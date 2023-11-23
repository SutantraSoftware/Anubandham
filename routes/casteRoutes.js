const express = require('express');
const router = express.Router();

const casteController =  require('../controllers/casteController')



//GET,POST PUT and DELETE

router.post("/castes",casteController.createCaste)

router.get("/getCaste",casteController.getCaste)


module.exports = router;
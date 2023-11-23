const express = require('express');
const router = express.Router();

const mothertongueController =  require('../controllers/mothertongueController')


//GET,POST PUT and DELETE

router.post("/mothertongue",mothertongueController.createMothertongue)

router.get("/getMothertongue",mothertongueController.getMothertongues)


module.exports = router;
const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TQPr  = require('../Controllers/TQPControllers');



router.get('/showw/:key', TQPr.recupererTQp)




module.exports= router
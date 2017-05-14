'use strict'

const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

router.post('/login', loginController.userLogin );

//Need proper implementation
router.post('/logout', function(req,res){
    return res.sendStatus(200);
})

module.exports = router;
'use strict'

const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const db = require('../services/dbConnect.services');
const auth = require('../middlewares/authentication.middleware');
const userAdapter = require('../middlewares/user.adapter');
const loginController = require('../controllers/login.controller');

router.post('/login', loginController.userLogin );

router.post('/logout', function(req,res){
    return res.sendStatus(200);
})

module.exports = router;
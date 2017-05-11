'use strict'

const db = require('../services/dbConnect.services');

const express = require('express');
const router = express.Router();


router.post('/login', function (req,res) {
  console.log(req.body.username,req.body.password);
  db.doQuery('SELECT * FROM public.user WHERE username=$1 AND password=$2',[req.body.username,req.body.password]).then( (results) => {return res.json(results)});
})


/* GET users listing. */
router.get('/', function(req, res) {
  db.doQuery('SELECT id,tekst FROM proba').then( (results) => {return res.json(results)});
 // console.log('sda');
 // return res.json(results);
});

module.exports = router;

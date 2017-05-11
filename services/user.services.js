'use strict'

const db = require('../services/dbConnect.services');


function getUser(username, password){
    const query='SELECT * FROM public.user WHERE username=$1 AND password=$2';
    return db.doQuery(query,[username, password]);
}

module.exports = {
    getUser
}
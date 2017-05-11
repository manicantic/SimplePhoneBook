'use strict';
const jwt = require('jsonwebtoken');


function authenticate(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
  //  console.log(token)
    if (token) {

    jwt.verify(token, 'secret', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
};

function createToken(user){
    let token = jwt.sign({
             exp: Math.floor(Date.now() / 1000) + (60 * 60),
             userId: user.id
                }, process.env.SECRET || 'secret');
    return token;

}



module.exports = {
    authenticate,
    createToken
};;
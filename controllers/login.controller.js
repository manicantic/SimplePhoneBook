'use strict'

const userAdapter = require('../middlewares/user.adapter');
const auth = require('../middlewares/authentication.middleware');
const userService =  require('../services/user.services');


function userLogin(req,res) {
    let username = req.body.username;
    let password = req.body.password;
    userService.getUser(username,password)
    .then( 
      (results) => {
          if(results){
              let token= auth.createToken(results);
              return res.status(200).json({token: token, user : userAdapter.toSimpleUser(results)});
          }
          else{
              return res.status(422).json({message: 'Wrong credentials'})
          }
      }
     );
};

module.exports = {
    userLogin
}
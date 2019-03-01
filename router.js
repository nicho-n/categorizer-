var express = require('express');
var router = express.Router();
var User = require('./user');

 
function validate_input(username, password, passwordConf){
  var forbidden_inputs = ["<script>", ""]
  return 1;
}


module.exports = function() {
  router.post('/create_account', function(req, res) {
    if (validate_input(req.body.username, req.body.password, req.body.passwordConf)) {
      var userData = {
        username: req.body.username,
        password: req.body.password,
        passwordConf: req.body.passwordConf,
      } 
  
      User.create(userData, function(error, user) {
        if (error) {
          return next("error")
        }
        
        else {
          req.session.user = user._id;
          req.session.username = req.body.username;
          return res.sendStatus(200);
        }    
      
      });
    }
  
    else{
        //user broke validation
        return res.redirect('back');
      }
  })

	return router;
};
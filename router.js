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
          console.log("error")
        }
        
        else {
          req.session.user = user._id;
          return res.sendStatus(200);
        }    
      
      });
    }
  
    else{
        //user broke validation
        return res.redirect('back');
      }
  })
  
	// GET for logout logout
	router.get('/logout', function(req, res, next) {
		if (req.session) {
			// delete session object
			req.session.destroy(function(error) {
				if (error) {
          return next(error);
        }
				else {
					return res.redirect('/');
				}
			});
		}
	});

	return router;
};
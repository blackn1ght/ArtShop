var express = require('express');
var passport = require('passport');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.jade', { title: "ArtShop"});
});

router.get('/login', function(req, res) {
	res.render('login.jade', { title: "ArtShop - Login"});
});

router.post('/login', passport.authenticate('local-login', { 
	successRedirect: '/',
	failureRedirect: '/login'}) 
);

router.get('/register', function(req, res) {
	res.render('register.jade', { title: "ArtShop - Register"})
});

router.post('/register', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/register'
	})
);

module.exports = router;

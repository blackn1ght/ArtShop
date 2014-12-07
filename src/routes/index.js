var express = require('express');
var passport = require('passport');
var router = express.Router();

function ensureAuthenticated(req, res, next) {
	console.log('ensureAuthenticated', req.isAuthenticated());
	if (req.isAuthenticated())
		return next();
	else
		res.redirect('/login');
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.jade', { title: "ArtShop"});
});

router.get('/login', function(req, res) {
	res.render('login.jade', { title: "ArtShop - Login"});
});

router.post('/login', passport.authenticate('local-login', { 
	successRedirect: '/home',
	failureRedirect: '/login'}) 
);

router.get('/register', function(req, res) {
	res.render('register.jade', { title: "ArtShop - Register"})
});

router.post('/register', passport.authenticate('local-signup', {
		successRedirect: '/home',
		failureRedirect: '/register'
	})
);

router.get('/home', ensureAuthenticated, function(req, res) {

	var user = {
		id: req.user.id,
		username: req.user.username
	}

	res.render('home/index.jade', { title: "ArtShop - Home ", user: user})
});



module.exports = router;

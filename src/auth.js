var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var User = require('./models/user');


module.exports = function(passport) {

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, done) {
		process.nextTick(function() {
			User.find({ where: {username: email}}).complete(function(err, user) {

				if (!!err)
					return done(null, false, { message: 'Something went wrong!'});

				if (user) {
					return done(null, false, { message: 'An account with this email address already exists.'});
				}

				var user = User.create({
						username: email,
						password: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
					}).complete(function(err, user) {
						if (err) {
							console.log('Could not create user.', err);
							return done(null, false, { message: 'Could not create user.'});
						} else {
							return user;
						}	
				});

				return done(null, user);
			});
		});
	}));

	passport.use('local-login', new LocalStrategy({
			usernameField: 'email',
			passportField: 'passport',
			passReqToCallback: true
		}, function(req, email, password, done) {
			process.nextTick(function() {
				User.find({where: { username: email}}).complete(function(err, user) {
					if (!!err)
						return done (null, false, { message: 'Could not find user with this username'});

					var isPasswordValid = bcrypt.compareSync(password, user.password);
					if (!isPasswordValid)
						return done(null, false, { message: 'Incorrect password.'});

					return done(null, user);
				});
			});
		}
	));

	passport.validPassword = function(password) {
		return this.password === password;
	};

	passport.serializeUser = function(user, done) {
		return done(null, user);
	};

	passport.deserializeUser = function(obj, done) {
		console.log('deserializeUser', obj);
		return done(null, obj);
	};
};



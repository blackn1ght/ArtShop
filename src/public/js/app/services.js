var app = app.module('artShopApp.services', []);

app.service('AuthService', [function() {
	
	var self = this;

	self.user = null;
	self.setUser = function(user) {
		self.user = user;
	};

	self.clear = function() {
		self.user = null;
	};

	return self;

}]);
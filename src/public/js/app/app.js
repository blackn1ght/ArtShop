var app = angular.module('artShopApp', ['ngRoute', 'ngResource', 'artShopApp.controllers', 'artShopApp.services', 'artShopApp.directives']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
		templateUrl: 'views/index.jade',
		controller: 'homeCtrl'
	}).when('/login', {
		templateUrl: 'views/login.jade',
		controller: 'loginCtrl'
	}).when('/home', {
		templateUrl: 'views/home/index.jade',
		controller: 'homeCtrl'
	});
}]);

app.controller("appCtrl", ["$scope", "AuthService", function($scope, AuthService) {
	$scope.setUser = function(user) {
		console.log(user);
		AuthService.setUser(user);
	};
}]);

app.directive('headerMenu', function() {
	return {
		replace: true,
		restrict: 'EA',
		scope: {
			user: "="
		},
		template: "<span>test: {{user}}</span>",
		link: function(scope) {
			console.log('user', user);
		}
	}
});

app.directive('testPanel', function() {
	return {
		replace: true,
		restrict: 'EA',
		template: "span test panel"
	}
})
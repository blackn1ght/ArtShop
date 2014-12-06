var app = angular.module('artShopApp', ['ngRoute', 'ngResource', 'artShopApp.controllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
		templateUrl: 'views/index.jade',
		controller: 'homeCtrl'
	}).when('/login', {
		templateUrl: 'views/login.jade',
		controller: 'loginCtrl'
	});
}]);
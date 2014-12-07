var app = angular.module("artShopApp.controllers", []);

app.controller('homeCtrl', ["$scope", function($scope) {
	$scope.test = "Home Controller";
}]);
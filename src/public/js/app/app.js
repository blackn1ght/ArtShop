var app = angular.module('ArtShop', ['ngRoute', 'ngResource']);

app.controller("AppCtrl", ['$scope', function($scope) {
  $scope.test = "hello";
}]);

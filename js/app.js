
var app = angular.module('myApp', [])

app.controller('mainController', ['$scope',function($scope) {
	$scope.title = "Welcome to my Sample App";

	$scope.expense = {
		description: 'Clothes',
		amount: 5
	}

	$scope.increaseAmount = function() {
		$scope.expense.amount++;
	}
}]);
angular
	.module("myApp", ["ui.router"])
	.controller("mainCtrl", $scope => {
		$scope.hello = "world";
		$scope.fruits = ["apple", "orange", "grape"];
	})
	.filter("makePlural", () => input => `${input}s`);

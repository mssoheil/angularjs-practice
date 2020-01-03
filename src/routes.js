angular.module("myApp").config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	// $locationProvider.html5Mode(false).hashPrefix("!");
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "home.html",
		})
		.state("posts", {
			url: "/posts",
			template: "<posts-list></posts-list>",
		});
}

angular.module("myApp").factory("mainSvc", function($http) {
	const getPosts = function() {
		const root = "https://jsonplaceholder.typicode.com";
		return $http({
			url: `${root}/posts`,
			method: "GET",
		});
	};

	return {
		getPosts,
	};
});

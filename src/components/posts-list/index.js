function PostsListController($scope, mainSvc) {
	mainSvc.getPosts().then(response => {
		$scope.posts = response.data;
	});
}

angular.module("myApp").component("postsList", {
	templateUrl: "components/posts-list/index.html",
	controller: PostsListController,
});

var app = angular.module('fireKeep');

app.controller('homeCtrl', function($scope, mainService) {

	$scope.posts = mainService.returnSync();

	$scope.postSubmit = function() {
		$scope.posts.$add({title: $scope.newPostTitle, link: $scope.newPostLink, tag: $scope.newPostTag, createdAt: new Date().toISOString()});
		$scope.newPostTitle = '';
		$scope.newPostLink = '';
		$scope.newPostTag = '';
	};



}); // close app.controller
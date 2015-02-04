var app = angular.module('fireKeep');

app.controller('homeCtrl', function($scope, mainService) {

	$scope.posts = mainService.returnSync();

	$scope.postSubmit = function() {
		$scope.posts.$add({title: $scope.newPostTitle, link: $scope.newPostLink, tag: $scope.newPostTag, createdAt: new Date().toISOString()});
		$scope.newPostTitle = '';
		$scope.newPostLink = '';
		$scope.newPostTag = '';
	};

	$scope.toggleAddComment = false;

	$scope.toggleAddCommentSwitch = function(post) {
		
		if(!post.showComment){
		 post.showComment = true;
		}
		else {
			post.showComment = false;
		}
	};

	$scope.addComment = function(post, comment) {
		mainService.getComments(post.$id).$add({text: comment, createdAt: new Date().toISOString()})
			post.showComment = true;


	};


}); // close app.controller
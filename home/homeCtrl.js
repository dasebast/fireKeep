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

	$scope.toggleAddCommentSwitch = function(index) {
		if ($scope.indexToShow !== index) {
		$scope.indexToShow = index;
		} else {
			$scope.indexToShow = null;	
		}
	};

	$scope.addComment = function(post, comment) {
		mainService.getComments(post.$id).$add({text: comment.text, createdAt: new Date().toISOString()}).then(function(){
			comment.text = '';
		});
	};

	$scope.toggleForm = false;

	$scope.cancel = function() {
		$scope.toggleForm = false;
		$scope.newPostTitle = '';
		$scope.newPostLink = '';
		$scope.newPostTag = '';
	}

	$scope.postFormToggle = function() {
		if($scope.toggleForm){
			if($scope.newPostTitle && $scope.newPostLink && $scope.newPostTag){
				$scope.postSubmit();
				$scope.toggleForm = !$scope.toggleForm;
			} else {
				alert("Fill out the fields idiot.")
			}
		} else {
			$scope.toggleForm = !$scope.toggleForm;
		}
	};


}); // close app.controller
var app = angular.module('fireKeep');

app.service('mainService', function($firebase) {


	var sync = $firebase(new Firebase('https://firekeep.firebaseio.com/'));
				//sync, ref, url
	
	this.returnSync = function() {
		return sync.$asArray();
	};

	this.getComments = function(postId) {
		var commentsRef = $firebase(new Firebase('https://firekeep.firebaseio.com/' + postId + '/comments'));
		return commentsRef.$asArray();
	};


	// ref.$asArray().$loaded().then(function(object) {
	// 	$scope.pictureUrl = object;
	// }); //close ref










// dan stuff
// var userRef = $firebase(new Firebase("https://firegram.firebaseio.com/"+uid))
	
}); //close app.service
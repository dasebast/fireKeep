var app = angular.module('fireGram');

app.service('mainService', function($firebase) {


	var sync = $firebase(new Firebase('https://firegram.firebaseio.com/'));
				//sync, ref, url
	
	this.returnSync = function() {
		return sync.$asArray();
	};


	// ref.$asArray().$loaded().then(function(object) {
	// 	$scope.pictureUrl = object;
	// }); //close ref










// dan stuff
// var userRef = $firebase(new Firebase("https://firegram.firebaseio.com/"+uid))
	
}); //close app.service
var app = angular.module('fireKeep', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	}) // close .when
	.when('/about', {
		templateUrl: 'about/about.html',
		controller: 'aboutCtrl'
	}) // close .when
	.otherwise('/');

}); // close app.config
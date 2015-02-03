var app = angular.module('fireGram', ['firebase', 'ngRoute']);

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
	.when('/pictures', {
		templateUrl: 'pictures/pictures.html',
		controller: 'picturesCtrl'
	}) // close .when
	.otherwise('/');

}); // close app.config
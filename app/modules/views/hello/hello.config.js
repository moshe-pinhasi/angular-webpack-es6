"use strict";

export default function ($stateProvider, $urlRouterProvider) {
	'ngInject'
	
	$stateProvider
		.state('hello', {
			url: '/',
			template: require('./hello.html'),
			controller: 'HelloController',
			controllerAs: 'helloCtrl'
		});

	$urlRouterProvider.otherwise('/');
}
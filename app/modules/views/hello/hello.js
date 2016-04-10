"use strict";

require('./hello.less');

const appModule = angular.module('hello', []);

HelloController.$inject = [];
function HelloController() {


}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('hello', {
				url: '/',
				template: require('./hello.html'),
				controller: 'HelloController',
				controllerAs: 'helloCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

appModule.controller('HelloController', HelloController);

module.exports = appModule.name;
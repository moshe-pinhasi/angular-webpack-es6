"use strict";

require('./hello.less');

const html = require('./hello.html');
const appModule = angular.module('hello', []);

HelloController.$inject = [];
function HelloController() {


}

appModule.config(['$stateProvider', '$urlRouterProvider',
	($stateProvider, $urlRouterProvider) => {
		$stateProvider
			.state('hello', {
				url: '/',
				template: html,
				controller: 'HelloController',
				controllerAs: 'helloCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

appModule.controller('HelloController', HelloController);

module.exports = appModule.name;
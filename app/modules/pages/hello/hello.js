"use strict";

require('./hello.less');

const html = require('./hello.html');
const swModule = angular.module('hello', []);

HelloController.$inject = [];
function HelloController() {


}

swModule.config(['$stateProvider', '$urlRouterProvider',
	($stateProvider, $urlRouterProvider) => {
		$stateProvider
			.state('hello', {
				url: '/',
				template: html,
				controller: HelloController,
				controllerAs: 'helloCtrl'
			})
		;

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = swModule.name;
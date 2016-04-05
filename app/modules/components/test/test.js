"use strict";

require('./test.less');

const appModule = angular.module('test', []);

TestController.$inject = [];
function TestController() {


}

appModule.component('test', {
	controllerAs: 'testCtrl',
	controller: TestController,
	template: require('./test.html')
});

module.exports = appModule.name;

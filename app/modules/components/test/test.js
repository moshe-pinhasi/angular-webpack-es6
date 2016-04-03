"use strict";

require('./test.less');

const appModule = angular.module('test', []);

HelloController.$inject = [];
function HelloController() {


}

appModule.component('test', {
	controllerAs: 'testCtrl',
	controller: [function() {
	}],
	template: require('./test.html')
});

module.exports = appModule.name;
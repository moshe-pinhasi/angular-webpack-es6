"use strict";

require('./test.less');

const swModule = angular.module('test', []);

HelloController.$inject = [];
function HelloController() {


}
swModule.component('test', {
	controllerAs: 'testCtrl',
	controller: [function() {
	}],
	template: require('./test.html')
});

module.exports = swModule.name;
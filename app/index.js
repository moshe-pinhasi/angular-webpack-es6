'use strict'

window.angular = require('angular');
require('./styles/globals.less');

angular.module('appEntry', [
	require('angular-ui-router'),
	require('angular-animate'),
	require('./modules')
]);

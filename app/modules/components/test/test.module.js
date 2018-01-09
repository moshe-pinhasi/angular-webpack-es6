"use strict";

require('./test.less');
import TestComponent from './test.component'

const appModule = angular.module('test', []);
appModule.component('test', TestComponent);

export default appModule.name;

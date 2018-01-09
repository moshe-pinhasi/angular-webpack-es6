"use strict";

require('./hello.less');
import config from './hello.config'
import HelloController from './hello.controller'

const appModule = angular.module('hello', []);

appModule.config(config);

appModule.controller('HelloController', HelloController);

export default appModule.name;
"use strict";

import TestController	from './test.controller'

const TestComponent = {
	controllerAs: 'testCtrl',
	controller: TestController,
	template: require('./test.html'),
	bindings: {
		
	}
};

export default TestComponent;

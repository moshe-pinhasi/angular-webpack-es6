import ServicesModule from './services'
import ComponentsModule from './services'
import ViewsModule from './views'

module.exports = angular.module('appModules', [
	ServicesModule,
	ComponentsModule,
	ViewsModule
]).name
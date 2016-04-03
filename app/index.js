


window.angular = require('angular');
require('./styles/globals.less');

angular.module('appEntry', [
	require('angular-ui-router'),
	require('./modules').name
]);

//angular.module('appEntry', [])
//	.component('viewImages', {
//		controllerAs: 'viewCtrl',
//		controller: [function() {
//			console.log("fdsk");
//		}]
//	});

//(function(angular) {
//  'use strict';
//angular.module('compareImages', [])
//  .component('viewImages', {
//	controllerAs: 'viewCtrl',
//    controller: ['$http', function($http) {
//
//	  var images = $http.get('./filenames.json');
//	  console.log(images);
//    }],
//    templateUrl: 'images.html'
//  })
//
//  const a = () => console.log("aa");
//
//
//  angular.module('app', ["pubnub.angular.service"])
//	 .controller('ChatCtrl', function($scope, Pubnub) {
//	   $scope.channel = 'messages-channel';
//	   // Generating a random uuid between 1 and 100 using an utility function from the lodash library.
//	   $scope.uuid = _.random(100).toString();
//	   Pubnub.init({
//			 publish_key: 'pub-c-dd8bf8ac-3000-4d85-b64f-d157103b39fc',
//			 subscribe_key: 'sub-c-d8e43d68-f97f-11e5-8916-0619f8945a4f',
//			 uuid: $scope.uuid
//		   });
//	 });
//})(window.angular);
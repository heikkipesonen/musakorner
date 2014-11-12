'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')
  .controller('MainCtrl',['$scope','api', function ($scope, api) {
  	angular.extend($scope,{
  		api:api	
  	});


  }]);

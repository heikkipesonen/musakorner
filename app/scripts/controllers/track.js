'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:TrackCtrl
 * @description
 * # TrackCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')
  .controller('TrackCtrl',['$scope','api', function ($scope, api) {
  	angular.extend($scope, {
  		castVote:function(){
  			api.castVote($scope.ngModel.id);
  		}
  	});
  }]);

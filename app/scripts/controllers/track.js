'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:TrackCtrl
 * @description
 * # TrackCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')
  .controller('TrackCtrl',['$scope','api','$timeout', function ($scope, api, $timeout) {
  	angular.extend($scope, {
  		busy:false,
  		castVote:function(){
  			$scope.busy = true;
  			api.castVote($scope.ngModel.id).then(function(response){

  				console.info(response);

  			}, function(){
  				
  				$timeout(function(){
  					$scope.busy = false;
  					console.log('joo');
  				},2000);
  			});
  		}
  	});
  }]);

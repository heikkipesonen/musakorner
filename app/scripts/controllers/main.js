'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')
  .controller('MainCtrl',['$scope','playlist', function ($scope, playlist) {
  	$scope.playlist = playlist;

  }]);

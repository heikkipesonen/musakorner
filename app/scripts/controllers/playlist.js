'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')

  .controller('PlaylistCtrl', ['$scope','playlist',function ($scope, playlist) {

  	angular.extend($scope, {
  		playlist:playlist,
  		style:playlist.style
	 	});
    
  }]);

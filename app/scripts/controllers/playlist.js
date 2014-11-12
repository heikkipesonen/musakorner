'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')

  .controller('PlaylistCtrl', ['$scope','api',function ($scope, api) {

  	api.search({q:'nightwish',type:'track'}).then(function(data){
  		console.log(data);
  		$scope.tracks = data.tracks.items;
  	});
    
  }]);

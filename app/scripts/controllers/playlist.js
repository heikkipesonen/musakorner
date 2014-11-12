'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')
	.service('api', ['$http', function($http){
		

		angular.extend(this,{
			search:function(params){
				return $http({
		  		method:'GET',
		  		url:'https://api.spotify.com/v1/search',
		  		params:params
		  	}).then(function(data){
		  		return data.data;
		  	});
			}
		});

	}])

	.directive('playlist', function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller:'PlaylistCtrl',
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			//template: '',
			templateUrl: 'templates/playlist.html',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		};
	})

  .controller('PlaylistCtrl', ['$scope','api',function ($scope, api) {
    

  	api.search({q:'nightwish',type:'track'}).then(function(data){
  		console.log(data);
  		$scope.tracks = data.tracks.items;
  	});

    
  }]);

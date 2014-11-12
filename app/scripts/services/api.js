'use strict';

/**
 * @ngdoc service
 * @name musakornerApp.api
 * @description
 * # api
 * Service in the musakornerApp.
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

	}]);
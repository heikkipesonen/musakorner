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
		
		this.client = Date.now();

		angular.extend(this,{
			setClient:function(id){
				this.client = id;
			},
			castVote:function(songId){
				return $http({
					method:'POST',
					url:'API',
					data:{song:songId,client:this.client}
				}).then(function(data){
					return data.data;
				});
			},
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
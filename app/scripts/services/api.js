'use strict';

/**
 * @ngdoc service
 * @name musakornerApp.api
 * @description
 * # api
 * Service in the musakornerApp.
 */
angular.module('musakornerApp')
	.service('api', ['$http','CONFIG','socket','$q', function($http, CONFIG, socket, $q){
		
		


		angular.extend(this,{
			client:Date.now(),
			session:null,
			socket:socket,
			setClient:function(id){
				this.client = id;
			},
			castVote:function(songId){
				var d = $q.defer();
				this.socket.emit('vote',{client:this.client,session:this.session, track:songId}, function(response){
					console.log(response);
					d.resolve(response);
				});

				return d.promise;

			/*
				return $http({
					method:'POST',
					url:CONFIG.api+'/castvote/'+this.session+'/'+songId,
					data:{client:this.client}
				}).then(function(data){
					return data.data;
				});
			*/
			},
			getPlaylist:function(){
				console.log(this.socket);
				return $http({
		  		method:'GET',
		  		url:CONFIG.api + '/playlist/' + this.session		  		
		  	}).then(function(data){
		  		return data.data;
		  	});
			}
		});

	}]);
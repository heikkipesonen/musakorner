'use strict';

/**
 * @ngdoc service
 * @name musakornerApp.playlist
 * @description
 * # playlist
 * Service in the musakornerApp.
 */
angular.module('musakornerApp')
  .service('playlist',['CONFIG','$rootScope','$timeout','socket','$http','$q', function playlist(CONFIG, $rootScope, $timeout, socket, $http, $q) {

    angular.extend(this, {
  		session:'J787',
  		client:null,  		
  		socket:socket,

    	trackHeight:75,
    	style:{
    		height:0,
    	},

    	tracks:[],
    	
    	scale:function(){
    		this.style.height = this.tracks.length * this.trackHeight + 'px';
    	},

    	findTrack:function(prop, value){
    		var result = false;
    		angular.forEach(this.tracks, function(item){
    			if (item[prop] === value){
    				 result = item;
    			}
    		});

    		return result;
    	},

    	setPlaylist:function(data){
    		var me = this;

    		this.tracks = data;
    		
    		$timeout(function(){
    			me.sort();
    			me.scale();
    		});
    	},


    	// hax sort
    	// if vote sort does not work, use time of modification (last modification does not get into top with equal votes)
    	// else sort by id (accually is dolan)

    	sort:function(){
    		this.tracks.sort(function(a,b){
    			
    			if (b.votes > a.votes){
    			
    				return 1;
    			
    			} else if (a.votes > b.votes){
    			
    				return -1;
    			
    			} else if (a.modified || b.modified){
    			
    				if (b.modified < a.modified){
    					return 1;
    				} else {
    					return -1;
    				}
    			
    			} else {
    			
    				if (b.order > a.order){
    					return 1;
    				} else {
    					return -1;
    				}
    			}

    				
    		});

    		// so track items can find their spot, until sorting... and shit
    		$timeout(function(){
    			$rootScope.$broadcast('track.reorder');
    		},10);
    	},

    	setTrackData:function(trackid, trackdata){
    		var track = this.findTrack('id', trackid);

    		if (track){
    			
    			for (var i in trackdata){
    				track[i] = trackdata[i];
    			}
    		}

    		return track;
    	},

    	setVote:function(track){
    		
    	},


    	// throw a vote to a track
    	castVote:function(track){
				var me = this;
				var d = $q.defer();
				
				this.socket.emit('vote',{client:this.client,session:this.session, track:track.id}, function(response){
	    		track.votes = response.votes;
	    		track.modified = response.modified;
					me.sort();
					d.resolve(response);
				});

				return d.promise;
			},

			joinSession:function(){
				var d = $q.defer();
				var me = this;

				this.socket.emit('join',{session: this.session}, function(response){					
					me.setPlaylist(response.playlist);
					d.resolve(response);
				});

				return d.promise;
			}
    });


		var me = this;

		// server requests the socket session to join in an "room"
		// because hitler
		this.socket.on('request.join', function(data){
			me.joinSession();
		});


		// some track has been voted, and an event comes back
		this.socket.on('track.voted', function(data){
			var track = me.findTrack('id',data.id);

			if (track){
				track.votes = data.votes;
				track.modified = data.modified;
				me.sort();
			}
		});
  }]);

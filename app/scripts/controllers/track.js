'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:TrackCtrl
 * @description
 * # TrackCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')
  .controller('TrackCtrl',['$scope','playlist','$timeout', function ($scope, playlist, $timeout) {
  	
    angular.extend($scope, {
  		busy:false,
      
      style:{        
        left:'0px',
        top:0
      },      
    
      getDuration:function(){
        return $scope.ngModel.duration_ms;
      },

      scale:function(){
        if (!$scope.ngModel.votes){$scope.ngModel.votes = 0;}
        $scope.style.top = $scope.order*playlist.trackHeight + 'px';
        
        //$scope.timeToTrack = playlist.getTimeToTrack($scope.ngModel.id);

        $timeout(function(){});
      },
    
      castVote:function(){
        playlist.castVote($scope.ngModel);
  		}
  	});

    $scope.$on('track.reorder', function(){
      $scope.scale();
    });

    $scope.scale();
  }]);

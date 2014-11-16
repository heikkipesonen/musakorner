'use strict';

/**
 * @ngdoc function
 * @name musakornerApp.controller:TrackCtrl
 * @description
 * # TrackCtrl
 * Controller of the musakornerApp
 */
angular.module('musakornerApp')
  .controller('TrackCtrl',['$scope','playlist', function ($scope, playlist) {
  	
    angular.extend($scope, {
  		busy:false,
      
      style:{        
        left:'0px',
        top:0
      },      
    
      scale:function(){
        if (!$scope.ngModel.votes){$scope.ngModel.votes = 0;}
        $scope.style.top = $scope.order*playlist.trackHeight + 'px';
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

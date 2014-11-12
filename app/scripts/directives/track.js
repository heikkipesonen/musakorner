'use strict';

/**
 * @ngdoc directive
 * @name musakornerApp.directive:track
 * @description
 * # track
 */
angular.module('musakornerApp')
  .directive('track', function () {
    return {
    	scope:{
    		ngModel:'='
    	},
    	controller:'TrackCtrl',
      templateUrl:'/templates/track.html',
      restrict: 'A'
    };
  });

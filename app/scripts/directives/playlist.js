'use strict';

/**
 * @ngdoc directive
 * @name musakornerApp.directive:playlist
 * @description
 * # playlist
 */
angular.module('musakornerApp')
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
	});
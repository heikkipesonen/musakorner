'use strict';

/**
 * @ngdoc overview
 * @name musakornerApp
 * @description
 * # musakornerApp
 *
 * Main module of the application.
 */
angular
  .module('musakornerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',    
    'ngSanitize',
    'ngTouch',
    'btford.socket-io'
  ])

  .constant('CONFIG',{
  	api:'http://192.168.0.10:3000'
  });
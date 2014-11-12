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
    'ngTouch'
  ])

  .constant('CONFIG',{
    id:'af2f90c75c5f4221958f6c8d196cdded',
    key:'f8dfe45e18054839a273a858cc025e0b'
  });
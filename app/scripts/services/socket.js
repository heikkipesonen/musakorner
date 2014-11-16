'use strict';

/**
 * @ngdoc service
 * @name musakornerApp.socket
 * @description
 * # socket
 * Factory in the musakornerApp.
 */
angular.module('musakornerApp')

  .factory('socket', ['socketFactory','CONFIG', function (socketFactory, CONFIG) {
    return socketFactory({
      ioSocket:io.connect(CONFIG.api)
    });
  }]);

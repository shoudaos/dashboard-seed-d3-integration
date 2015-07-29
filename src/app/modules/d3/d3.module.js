(function() {
  'use strict';

  var module = angular.module('app.d3', ['ui.router']);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.d3', {
        url: '/d3',
        templateUrl: 'app/modules/d3/d3.html',
        controller: 'D3Controller',
        controllerAs: 'vm'
      });
  }
})();

(function() {
  'use strict';

  angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider

      .when('/signup', {
        templateUrl: '/partials/signup/signup.html',
        controller: 'SignupController'
      })

      $locationProvider.html5Mode(true);
    });

}());

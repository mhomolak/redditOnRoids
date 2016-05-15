(function() {
  'use strict';

  angular.module('RedditClone')
    .controller('SignupController', function ($scope, $http, $window, $location) {

      $scope.createUser = function () {

        $http.post('/signup', $scope.user) // need to setup the api
          .then(function (response) {
            $window.localStorage.setItem('token', response.data.token);
            $location.path('/')
          })
      }
    })

}());

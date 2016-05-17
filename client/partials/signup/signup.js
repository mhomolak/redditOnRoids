  (function() {
    'use strict';

    angular.module('RedditClone')
      .controller('SignupController', function ($scope, $http, $window, $location) {
        $scope.createUser = function () {
          $http.post('http://localhost:3000/users/signup', $scope.user)
            .then(function (response) {
              $window.localStorage.setItem('token', response.data.token);
              $location.path('/signup')
            })
        }
      })

  }());

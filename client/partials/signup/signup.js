  (function() {
    'use strict';

    angular.module('RedditClone')
      .controller('SignupController', function ($scope, $http, $window, $location) {
        $scope.createUser = function () {
          $http.post('http://localhost:3000/api/v1/users/signup', $scope.user)
            .then(function (response) {
              console.log('in then of post signup', response);
              $window.localStorage.setItem('token', response.data.token);
              $location.path('/')
            })
        }
      })

  }());

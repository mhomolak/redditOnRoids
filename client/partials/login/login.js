(function() {
  'use strict';

  angular.module('RedditClone')
    .controller('LoginController', function ($scope, $http, $window, $location) {
      $scope.logInUser = function () {
        $http.post('http://localhost:3000/users/login', $scope.user)
          .then(function (response) {
            $window.localStorage.setItem('token', response.data.token);
            $location.path('/')
          })
          .catch(function () {
            console.log($scope);
            $scope.errah = 'cool'
          })
      }
    })

}());

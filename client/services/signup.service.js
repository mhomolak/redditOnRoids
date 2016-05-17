angular.module('RedditClone')
  .constant('API', 'http://localhost:3000/api/v1')
  .factory('signUpService',function($http, API) {
console.log("test");
    var signUpService = {
      sign: function () {
        return $http.post(API + '/users/signup');
      }
    }

    return signUpService;
});

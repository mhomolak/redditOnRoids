angular.module('RedditClone')
  .constant('API', 'http://localhost:3000/api/v1')
  .factory('signUpService',function($http, API) {
console.log("test");
    var signUpService = {
      sign: function () {
        console.log('in signup factory');
        return $http.post(API + '/users/signup');
      }
    }

    return signUpService;
});

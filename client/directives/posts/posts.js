angular.module('RedditClone')
  .controller('PostsController', ['$scope', 'postsService', PostsController])
  .directive('posts', PostsDirective);

    function PostsController ($scope, postsService) {
        var vm = this;
        vm.data = {};
        vm.data.posts = postsService.posts;
    }

    function PostsDirective () {
      return {
          restrict: 'E',
          templateUrl: '/directives/posts/posts.html',
          controller: 'PostsController as PostsCtrl',
          bindToController: true
      };
    }

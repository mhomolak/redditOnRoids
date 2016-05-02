angular.module('RedditClone')
    .controller('HeaderCtrl',function($scope, postsService){
        $scope.vs = $scope.vs || {};

        $scope.vs.filterFavorites = function (data) {
            if (!$scope.vs.favorites) return true;
            return data.favorite;
        }

        $scope.newPost = function () {
          console.log($scope.post);
            var newPost = angular.copy($scope.post);
            $scope.form.$setPristine();
            $scope.form.$setUntouched();
            $scope.post = {};
            postsService.addPost(newPost);

            // Hide form
            $scope.vs.TogglePostForm = false;
        }

  });

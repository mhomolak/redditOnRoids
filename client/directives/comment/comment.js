angular.module('RedditClone').directive('comment', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/directives/comment/comment.html',
        link: function(scope, element, attrs, fn) {
            scope.comments = scope.post.comments;
        },
        controller: function ($scope, $timeout, postsService) {
            $scope.vs = {};

            // ViewState Object
            $scope.vs.form = false;
            $scope.vs.comments = false;

            $scope.addComment = function (postId, formComment) {
                var post = postsService.postById(postId);
                var commentCopy = angular.copy(formComment);
                post.comments.push(commentCopy);
                $scope.form.$setPristine();
                $scope.form.$setUntouched();
                $scope.comment = {};
                $scope.vs.form = false;
                $scope.vs.comments = true;
            };
        }
    };
});

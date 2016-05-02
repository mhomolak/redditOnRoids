angular.module('RedditClone')
    .controller('VoteController', ['$scope', 'postsService', VoteController])
    .directive('rcVote', VoteDirective);

function VoteDirective() {
    return {
        restrict: 'E',
        scope: {
            post: '='
        },
        templateUrl: 'directives/vote/vote.html',
        controller: 'VoteController as VoteCtrl',
        bindToController: true
    };
}

function VoteController($scope, postsService) {
    $scope.fn = {};

    $scope.fn.upVote = function(postId) {
        var post = postsService.postById(postId);
        ++post.votes;
    };

    $scope.fn.downVote = function(postId) {
        var post = postsService.postById(postId);
        --post.votes;
    };
}

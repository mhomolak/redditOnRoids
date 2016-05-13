angular.module('RedditClone')
  .constant('API', 'http://localhost:3000/api/v1')
  .factory('postsService',function($http, API) {

    var postsService = {
        postById: function (postId) {
            return this.posts.filter(function(post) {
                return post.id === +postId;
            }).pop();
        },
        addPost: function (post) {
            var posts = this.posts,
                postId = posts.length+1;

                // Normalize Post Object
                post['id'] = postId;
                post['favorite'] = false;
                post['date'] = moment( new Date().getTime() ).fromNow();
                post['votes'] = 0;
                post['comments'] = [];

            // Insert and Return Posts
            return this.posts.push(post);
        },
        posts: function() {
          return $http.get(API+'/posts');
        }
    };



    return postsService;
});

angular.module('RedditClone').factory('postsService',function() {

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
        posts: [{
          id: 1,
          favorite: false,
          title: 'A world of possibilities.',
          author: 'Jimmy Bluefox',
          image: 'http://www.toptenpack.com/wp-content/uploads/2014/08/high-quality-backgrounds.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus mollis purus auctor convallis non volutpat felis. Nullam at magna quam. Aenean tincidunt a quam ut porta. Ut fermentum tristique elementum. Nullam consequat nisl eget efficitur egestas. Duis vitae magna nisl. Duis tincidunt, felis quis aliquam malesuada, urna turpis aliquam nisi, et consequat lacus turpis non dui. Suspendisse feugiat efficitur elit, blandit porttitor est viverra ut. Donec ullamcorper est sit amet neque consectetur pretium. Integer leo purus, cursus vel auctor id, efficitur ac metus. Nam iaculis sapien vitae dolor ullamcorper convallis. Nam id mi magna.',
          date: moment( new Date().getTime() - 358237 ).fromNow(),
          votes: 5,
          comments: [ {author: 'Jon Doe', body: 'Some snazzy comment or nah?'} ,
                      {author: 'Jill Bowzy', body: 'I love RedditClone!'} ]
        },
        {
          id: 2,
          favorite: true,
          title: 'Hello, funny guy!',
          author: 'Sally Tigerfish',
          image: 'http://www.toptenpack.com/wp-content/uploads/2014/08/high-resolution-pictures.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et dolor erat. Mauris tristique magna tincidunt risus volutpat, ut maximus lectus vestibulum. Duis lobortis semper aliquet. Phasellus a orci sem. Nullam sem tellus, finibus nec augue a, congue volutpat velit. Nam pulvinar urna ac tempor vehicula. Aliquam purus sem, eleifend vitae laoreet vitae, tempus id massa. Donec at dignissim nisl, quis feugiat libero. Aenean hendrerit ullamcorper erat, ac sollicitudin quam molestie nec. In in elit a arcu mollis pretium.',
          date: moment( new Date().getTime() - 734890 ).fromNow(),
          votes: 4,
          comments: [ {author: 'Bob Rando', body: 'Heeeeeey that\'s cool!'} ]
        },
        {
          id: 3,
          favorite: false,
          title: 'Paradiso is waiting...',
          author: 'Dax Killingbird',
          image: 'http://www.toptenpack.com/wp-content/uploads/2014/08/high-res-wallpapers.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum, velit fringilla bibendum sodales, diam nisi dignissim urna, ullamcorper ultricies nisi justo non turpis. Mauris tempor, nulla at fringilla rutrum, magna dui dignissim diam, dapibus vehicula est risus et est. Aenean in massa eu felis commodo molestie a non odio. Vestibulum imperdiet urna a pretium pulvinar. Integer sodales massa in imperdiet egestas. Maecenas non felis eu augue ornare auctor quis id turpis. Donec mollis est non lorem ultricies lacinia. Mauris et dapibus purus, non egestas quam. Nam fermentum tortor non placerat ultrices.',
          date: moment( new Date().getTime() - 36737898 ).fromNow(),
          votes: 2,
          comments: []
        }]
    };

    return postsService;
});

exports.seed = function(knex, Promise) {

  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({
      id: 1,
      favorite: false,
      title: 'A world of possibilities.',
      author: 'Jimmy Bluefox',
      image: 'http://www.toptenpack.com/wp-content/uploads/2014/08/high-quality-backgrounds.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut lectus mollis purus auctor convallis non volutpat felis. Nullam at magna quam. Aenean tincidunt a quam ut porta. Ut fermentum tristique elementum. Nullam consequat nisl eget efficitur egestas. Duis vitae magna nisl. Duis tincidunt, felis quis aliquam malesuada, urna turpis aliquam nisi, et consequat lacus turpis non dui. Suspendisse feugiat efficitur elit, blandit porttitor est viverra ut. Donec ullamcorper est sit amet neque consectetur pretium. Integer leo purus, cursus vel auctor id, efficitur ac metus. Nam iaculis sapien vitae dolor ullamcorper convallis. Nam id mi magna.',
      votes: 5
    }),

    knex('posts').insert({
      id: 2,
      favorite: true,
      title: 'Hello, funny guy!',
      author: 'Sally Tigerfish',
      image: 'http://www.toptenpack.com/wp-content/uploads/2014/08/high-resolution-pictures.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et dolor erat. Mauris tristique magna tincidunt risus volutpat, ut maximus lectus vestibulum. Duis lobortis semper aliquet. Phasellus a orci sem. Nullam sem tellus, finibus nec augue a, congue volutpat velit. Nam pulvinar urna ac tempor vehicula. Aliquam purus sem, eleifend vitae laoreet vitae, tempus id massa. Donec at dignissim nisl, quis feugiat libero. Aenean hendrerit ullamcorper erat, ac sollicitudin quam molestie nec. In in elit a arcu mollis pretium.',
      votes: 4
    }),

    knex('posts').insert({
      id: 3,
      favorite: false,
      title: 'Paradiso is waiting...',
      author: 'Dax Killingbird',
      image: 'http://www.toptenpack.com/wp-content/uploads/2014/08/high-res-wallpapers.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum, velit fringilla bibendum sodales, diam nisi dignissim urna, ullamcorper ultricies nisi justo non turpis. Mauris tempor, nulla at fringilla rutrum, magna dui dignissim diam, dapibus vehicula est risus et est. Aenean in massa eu felis commodo molestie a non odio. Vestibulum imperdiet urna a pretium pulvinar. Integer sodales massa in imperdiet egestas. Maecenas non felis eu augue ornare auctor quis id turpis. Donec mollis est non lorem ultricies lacinia. Mauris et dapibus purus, non egestas quam. Nam fermentum tortor non placerat ultrices.',
      votes: 2
    })

  );

};

// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'reddit_clone'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'reddit_clone'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'reddit_clone'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};

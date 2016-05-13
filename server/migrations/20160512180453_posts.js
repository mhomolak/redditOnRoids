exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.boolean('favorite');
    table.string('title');
    table.string('author');
    table.text('image');
    table.text('description');
    table.timestamp('timestamp');
    table.integer('votes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

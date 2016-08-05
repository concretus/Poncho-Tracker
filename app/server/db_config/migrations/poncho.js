
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
      table.string('name');
      table.string('email');
      table.timestamps();
    }),

    knex.schema.createTableIfNotExists('entries', function(table){
      table.increments('id').primary();
      table.string('content');
      table.integer('author_id')
           .references('id')
           .inTable('users');
      table.string('type');
      table.dateTime('postDate');
    }),

    knex.schema.createTableIfNotExists('RFIs', function(table){
      table.increments('id').primary();
      table.string('title');
      table.integer('author_id')
           .references('id')
           .inTable('RFIs');
      table.dateTime('postDate');
      table.dateTime('dueDate');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('entries'),
    knex.schema.dropTable('RFIs')
  ]);
};

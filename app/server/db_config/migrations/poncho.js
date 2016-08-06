
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
      table.string('name');
      table.string('email');
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    }),

    knex.schema.createTable('entries', function(table){
      table.increments('id').primary();
      table.string('content');
      table.integer('author_id')
           .references('id')
           .inTable('users');
      table.string('type');
      table.dateTime('postDate');
    }),

    knex.schema.createTable('rfis', function(table){
      table.increments('id').primary();
      table.decimal('rfi_number');
      table.dateTime('date_created');
      table.dateTime('date_due');
      table.string('title');
      table.string('question');
      table.integer('related_RFI')
           .references('id')
           .inTable('rfis');
      table.integer('created_by')
           .references('id')
           .inTable('users');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('entries'),
    knex.schema.dropTable('rfis')
  ]);
};

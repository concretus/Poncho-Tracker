var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : process.env.POSTGRES_HOST,
    user     : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD,
    database : process.env.POSTGRES_DB,
    charset  : 'utf8'
  }
});

module.exports = knex;

return knex.schema.createTableIfNotExists('users', function(table) {
  table.increments('id').primary();
  table.string('first_name', 100);
  table.string('last_name', 100);
  table.text('bio');
}).then(function(){
  console.log('user table created!')
});
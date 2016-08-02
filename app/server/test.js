var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '192.168.99.100',
    user     : 'postgres',
    password : '',
    database : 'testdb',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

var Company = bookshelf.Model.extend({
  tableName: 'company'
});

Company.fetchAll()
  .then(function(model) {
    console.log('this is the model: ', model);
  });

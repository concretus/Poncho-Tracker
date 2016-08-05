const express = require('express');
const app = express();
// const pg = require('pg');
// const knex = require('./db_config/schema');
const queries = require('./db_config/queries');

const port = 8080;
// const conString = "postgres://"+process.env.POSTGRES_USER+":"+process.env.POSTGRES_PASSWORD+"@postgres:5432/"+process.env.POSTGRES_DB;

console.log('process.env.POSTGRES_PASSWORD: ', process.env.POSTGRES_PASSWORD);
console.log('process.env.POSTGRES_USER: ', process.env.POSTGRES_USER);
console.log('process.env.POSTGRES_DB: ', process.env.POSTGRES_DB);
// configure our server with all the middleware
require('./config/middleware.js')(app, express);

app.get('/api/v1/pageview', (req, res) => {
  queries.getAll()
    .then((data) => {
      res.status(200).json(data);
    });
});

app.post('/api/v1/pageview', (req, res) => {
  queries.postOne(req)
    .then((data) => {
      res.status(200).json(data);
    });
});

app.get('/testpg', (req, res) => {
  // pg.connect(conString, function(err, client, done) {
  //   client.query('CREATE TABLE IF NOT EXISTS foo (id SERIAL, bar varchar);', function(err, result) {
  //     if(err) {
  //       return console.error('error fetching client from pool', err);
  //     }
  //     client.query('INSERT INTO "foo" (bar) values (\'blah\');', function(err, result) {
  //       done();
  //       client.query('SELECT count(id) as counter FROM "foo";', function(err, result) {
  //         if(err) {
  //           return console.error('error running query', err);
  //         }
  //         res.send('This page has been viewed: ' + result.rows[0].counter + ' times! from container '+ require("os").hostname());
  //       });
  //     });
  //   });
  // });
  res.send('ok!');
});

app.get('/testbookshelf', (req, res) => {

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

  // var bookshelf = require('bookshelf')(knex);

  // knex.schema.createTableIfNotExists('users', function (table) {
  //   table.increments();
  //   table.string('name');
  //   table.timestamps();
  // });

  return knex.schema.createTableIfNotExists('users', function(t) {
    t.increments('id').primary();
    t.string('first_name', 100);
    t.string('last_name', 100);
    t.text('bio');
  }).then(function(){
    res.send('testing bookshelf');
  });

  // knex.schema.hasTable('users').then(function(exists) {
  //   if (!exists) {
  //     return knex.schema.createTable('users', function(t) {
  //       t.increments('id').primary();
  //       t.string('first_name', 100);
  //       t.string('last_name', 100);
  //       t.text('bio');
  //     });
  //   } else 
  // });

  // var User = bookshelf.Model.extend({
  //   tableName: 'customer'
  // });

  // User.collection().fetch().then(function (collection) {
  //   console.log(collection);
    // res.send('testing bookshelf');
  // });

});

app.get('/*', (req, res) => res.redirect('/'));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;

const express = require('express');
const app = express();
const pg = require('pg');

const port = 8080;
// const conString = "postgres://"+process.env.POSTGRES_USER+":"+process.env.POSTGRES_PASSWORD+"@postgres:5432/"+process.env.POSTGRES_DATABASE;

console.log('process.env.POSTGRES_PASSWORD: ', process.env.POSTGRES_PASSWORD);
console.log('process.env.POSTGRES_USER: ', process.env.POSTGRES_USER);
console.log('process.env.POSTGRES_DATABASE: ', process.env.POSTGRES_DATABASE);
// configure our server with all the middleware
require('./config/middleware.js')(app, express);

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
});

app.get('/testbookshelf', (req, res) => {

  // var knex = require('knex')({
  //   client: 'pg',
  //   connection: {
  //     host     : 'postgres',
  //     user     : process.env.POSTGRES_USER,
  //     password : process.env.POSTGRES_PASSWORD,
  //     database : process.env.POSTGRES_DATABASE,
  //     charset  : 'utf8'
  //   }
  // });

  // var bookshelf = require('bookshelf')(knex);

  // var User = bookshelf.Model.extend({
  //   tableName: 'users'
  // });

  // new User().fetchAll()
  //   .then(function(collection){
  //     console.log(collection);
  //     res.send('Hello bookshelf');
  //   });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

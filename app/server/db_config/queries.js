const knex = require('./knex.js');

function Shows() {
  return knex('pageview');
}

// *** queries *** //

function getAll() {
  return Shows().select();
}


module.exports = {
  getAll: getAll
};
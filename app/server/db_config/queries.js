const knex = require('./knex.js');

function Users() {
  return knex('pageview');
}

// *** queries *** //

function getAll() {
  return Users().select();
}

module.exports = {
  getAll: getAll
};
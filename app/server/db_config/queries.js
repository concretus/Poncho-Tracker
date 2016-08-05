const knex = require('./knex.js');

function Users() {
  return knex('pageview');
}

// *** queries *** //

function getAll() {
  return Users().select();
}

function postOne(req) {
  return Users().insert(req.body);
}

module.exports = {
  getAll: getAll,
  postOne: postOne
};
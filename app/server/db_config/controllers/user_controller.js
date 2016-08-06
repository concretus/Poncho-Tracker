const knex = require('../knex.js');

function Users() {
  return knex('users');
}

// *** queries *** //
function getAll() {
  return Users().select();
}

function postOne(user) {
  return Users().insert(user);
}

module.exports = {
  getAll: getAll,
  postOne: postOne
};
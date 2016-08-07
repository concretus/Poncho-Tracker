const knex = require('../knex.js');

function RFIs() {
  return knex('rfis');
}

// *** queries *** //
function getAll() {
  return RFIs().select();
}

function postOne(rfi) {
  return RFIs().insert(rfi).catch((err) => console.log(err));
}

module.exports = {
  getAll: getAll,
  postOne: postOne
};
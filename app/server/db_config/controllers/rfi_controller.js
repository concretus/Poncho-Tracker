const knex = require('../knex.js');

function RFIs() {
  return knex('rfis');
}

const rfi_queries = {
  getAll() {
    return RFIs().select();
  },

  postOne(rfi) {
    return RFIs().insert(rfi).catch((err) => console.log(err));
  },

  getOne(rfiNumber) {
    return RFIs().where({ rfi_number: rfiNumber	})
                 .select()
                 .catch((err) => console.log(err));
  }
};

module.exports = rfi_queries;
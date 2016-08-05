
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pageview').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('pageview').insert({uid: 1}),
        knex('pageview').insert({uid: 2})
      ]);
    });
};

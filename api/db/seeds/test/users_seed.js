
exports.seed = function(knex) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function () {// Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Bob', 
          last_name: 'Belcher'
        },
        {
          first_name: 'Linda', 
          last_name: 'Belcher'
        },
        {
          first_name: 'Gene', 
          last_name: 'Simmons test'
        }
      ]);
    });
};

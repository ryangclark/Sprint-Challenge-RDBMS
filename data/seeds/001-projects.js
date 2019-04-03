exports.seed = function(knex) {
  return knex('projects').insert([
    // Boolean column not populated to test if `defaultTo()` works
    { name: 'Bake Bread', description: 'Bake two hearty loaves.' },
    {
      name: 'Befriend Bigfoot',
      description: 'Finally find and befriend the mythical creature.'
    }
  ]);
};

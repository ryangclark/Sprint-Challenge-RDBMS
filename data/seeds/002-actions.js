exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      name: 'Measure Ingredients',
      description: 'Measure flour, water, salt, yeast according to recipe.',
      notes: ''
    },
    {
      project_id: 1,
      name: 'Make Dough',
      description:
        'Combine ingredients, complete dough turns, shape final loaves, and proof.',
      notes: 'Completed three turns.'
    },
    {
      project_id: 2,
      name: 'Locate the Big Man',
      description: 'Scour the globe for Big Foot.',
      notes: 'The mountain forests seem promising.'
    },
    {
      project_id: 2,
      name: 'Befriend the Big Man',
      description:
        "Learn Big Foot's name, and his likes and dislikes. Use that knowledge to woo him into a lifelong friendship.",
      notes: 'I bet he\'s a real cool dude.'
    }
  ]);
};

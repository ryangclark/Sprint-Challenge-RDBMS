exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', table => {
      table.increments();
      table
        .string('name')
        .notNullable()
        .unique();
      table.text('description');
      table
        .boolean('complete')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('actions', table => {
      table.increments();
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.string('name').notNullable();
      table.text('description');
      table.text('notes');
      table
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex, Promise) {};

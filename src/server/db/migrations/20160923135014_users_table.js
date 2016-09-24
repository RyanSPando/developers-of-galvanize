
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('username').notNullable();
    table.integer('firsts').defaultTo(0);
    table.integer('seconds').defaultTo(0);
    table.integer('thirds').defaultTo(0);
    table.integer('fourths').defaultTo(0);
    table.integer('score').defaultTo(0);
    table.integer('games_played').defaultTo(0);
    table.integer('game_id').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.foreign('game_id').references('id').inTable('games');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

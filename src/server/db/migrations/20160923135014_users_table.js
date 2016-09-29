
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('username').notNullable().unique();
    table.text('avatar_url').defaultTo('http://www.fsirbike.com/images/anonymous-user.png');
    table.integer('firsts').defaultTo(0);
    table.integer('seconds').defaultTo(0);
    table.integer('thirds').defaultTo(0);
    table.integer('fourths').defaultTo(0);
    table.integer('score').defaultTo(0);
    table.integer('games_played').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

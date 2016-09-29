
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_game', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.text('gameID').notNullable();
    table.string('color').notNullable();
    table.text('avatar_url').defaultTo('https://media.giphy.com/media/SxthdSyeTcbRK/giphy.gif');
    table.integer('wheat_cards').defaultTo(0);
    table.integer('wood_cards').defaultTo(0);
    table.integer('brick_cards').defaultTo(0);
    table.integer('sheep_cards').defaultTo(0);
    table.integer('ore_cards').defaultTo(0);
    table.integer('knight_cards').defaultTo(0);
    table.integer('victory_point_cards').defaultTo(0);
    table.integer('monopoly_cards').defaultTo(0);
    table.integer('road_building_cards').defaultTo(0);
    table.integer('year_of_plenty_cards').defaultTo(0);
    table.jsonb('settle_one_location');
    table.jsonb('settle_two_location');
    table.jsonb('settle_three_location');
    table.jsonb('settle_four_location');
    table.jsonb('settle_five_location');
    table.jsonb('city_one_location');
    table.jsonb('city_two_location');
    table.jsonb('city_three_location');
    table.jsonb('city_four_location');
    table.jsonb('road_one_location');
    table.jsonb('road_two_location');
    table.jsonb('road_three_location');
    table.jsonb('road_four_location');
    table.jsonb('road_five_location');
    table.jsonb('road_six_location');
    table.jsonb('road_seven_location');
    table.jsonb('road_eight_location');
    table.jsonb('road_nine_location');
    table.jsonb('road_ten_location');
    table.jsonb('road_eleven_location');
    table.jsonb('road_twelve_location');
    table.jsonb('road_thirteen_location');
    table.jsonb('road_fourteen_location');
    table.jsonb('road_fifteen_location');
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('gameID').references('gameID').inTable('games');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_game');
};

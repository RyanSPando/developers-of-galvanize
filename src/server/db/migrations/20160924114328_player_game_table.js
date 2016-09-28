
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_game', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.integer('game_id').notNullable();
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
    table.integer('settle_one_location');
    table.integer('settle_two_location');
    table.integer('settle_three_location');
    table.integer('settle_four_location');
    table.integer('settle_five_location');
    table.integer('city_one_location');
    table.integer('city_two_location');
    table.integer('city_three_location');
    table.integer('city_four_location');
    table.integer('road_one_location');
    table.integer('road_two_location');
    table.integer('road_three_location');
    table.integer('road_four_location');
    table.integer('road_five_location');
    table.integer('road_six_location');
    table.integer('road_seven_location');
    table.integer('road_eight_location');
    table.integer('road_nine_location');
    table.integer('road_ten_location');
    table.integer('road_eleven_location');
    table.integer('road_twelve_location');
    table.integer('road_thirteen_location');
    table.integer('road_fourteen_location');
    table.integer('road_fifteen_location');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_game');
};

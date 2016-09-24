
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game',(table) => {
    table.increments();
    table.integer('wheat_cards').defaultTo(19);
    table.integer('wood_cards').defaultTo(19);
    table.integer('brick_cards').defaultTo(19);
    table.integer('sheep_cards').defaultTo(19);
    table.integer('ore_cards').defaultTo(19);
    table.integer('knight_cards').defaultTo(14);
    table.integer('victory_point_cards').defaultTo(5);
    table.integer('monopoly_cards').defaultTo(2);
    table.integer('road_building_cards').defaultTo(2);
    table.integer('year_of_plenty_cards').defaultTo(2);
  });
};
exports.down = function(knex, Promise) {

};

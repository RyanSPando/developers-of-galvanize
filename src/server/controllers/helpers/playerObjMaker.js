class MakePlayer {
  constructor(name, color, avatar_url, user_id, game_id) {
    this.name = name;
    this.game_id = game_id;
    this.user_id = user_id;
    this.color = color;
    this.avatar = avatar_url;
    this.wheat_cards = 0;
    this.wood_cards = 0;
    this.brick_cards = 0;
    this.sheep_cards = 0;
    this.ore_cards = 0;
    this.knight_cards = 0;
    this.victory_point_cards = 0;
    this.monopoly_cards = 0;
    this.road_building_cards = 0;
    this.year_of_plenty_cards = 0;
    this.settle_one_location = null;
    this.settle_two_location = null;
    this.settle_three_location = null;
    this.settle_four_location = null;
    this.settle_five_location = null;
    this.city_one_location = null;
    this.city_two_location = null;
    this.city_three_location = null;
    this.city_four_location = null;
    this.road_one_location = null;
    this.road_two_location = null;
    this.road_three_location = null;
    this.road_four_location = null;
    this.road_five_location = null;
    this.road_six_location = null;
    this.road_seven_location = null;
    this.road_eight_location = null;
    this.road_nine_location = null;
    this.road_ten_location = null;
    this.road_eleven_location = null;
    this.road_twelve_location = null;
    this.road_thirteen_location = null;
    this.road_fourteen_location = null;
    this.road_fifteen_location = null;
  }
}

module.exports = {
  MakePlayer
};

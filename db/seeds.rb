# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.delete_all
Restaurant.delete_all
Cuisine.delete_all

cuisine_indian = Cuisine.create!(name: 'Indian', icon: '#')
cuisine_french = Cuisine.create!(name: 'French', icon: 'C')
cuisine_italian = Cuisine.create!(name: 'Italian', icon: '5')
cuisine_cafe = Cuisine.create!(name: 'Cafe', icon: 'B')
cuisine_bakery = Cuisine.create!(name: 'Bakery', icon: 'Q')
cuisine_fish = Cuisine.create!(name: 'fish', icon: 'K')
cuisine_pizza = Cuisine.create!(name: 'Pizza', icon: 'L')
cuisine_burger = Cuisine.create!(name: 'Burger', icon: 'A')

Restaurant.create!(
    name: 'Tandoori',
    max_delivery_time: 10,
    cuisine_id: cuisine_indian.id,
    address: 'Zamenhoff St 2, Tel Aviv-Yafo',
    lat: 32.078022,
    lon: 34.774989)

Restaurant.create!(
    name: 'Agvanya',
    max_delivery_time: 15,
    cuisine_id: cuisine_pizza.id,
    address: 'Dizengoff St 50, Tel Aviv-Yafo',
    lat: 32.075583,
    lon: 34.775427)

Restaurant.create!(
    name: 'Ma Pau',
    max_delivery_time: 10,
    cuisine_id: cuisine_indian.id,
    address: 'Nahalat Binyamin St 59 Tel Aviv-Yafo',
    lat: 32.064031,
    lon: 34.771530)

wolfnights = Restaurant.create!(
    name: 'Wolfnights',
    max_delivery_time: 13,
    cuisine_id: cuisine_burger.id,
    address: 'Ibe Gabirol St 67, Tel Aviv-Yafo',
    accept_10_bis: true,
    lat: 32.079392,
    lon: 32.079392)

Restaurant.create!(
    name: 'L\'Entrecote',
    max_delivery_time: 10,
    cuisine_id: cuisine_french.id,
    address: 'Ahad Ha\'Am St 28, Tel Aviv-Yafo',
    lat: 32.063931,
    lon: 34.771317)

Restaurant.create!(
    name: 'Popina',
    max_delivery_time: 17,
    cuisine_id: cuisine_french.id,
    address: 'Ahad Ha\'Am St 3, Tel Aviv-Yafo',
    accept_10_bis: true,
    lat: 32.063598,
    lon: 34.768392)

Restaurant.create!(
    name: 'Aroma',
    max_delivery_time: 1,
    cuisine_id: cuisine_cafe.id,
    address: 'Shaul Hamelech St 30, Tel Aviv-Yafo',
    accept_10_bis: true,
    lat: 32.076561,
    lon: 34.787211)

Restaurant.create!(
    name: 'Amore Mio',
    max_delivery_time: 10,
    cuisine_id: cuisine_italian.id,
    address: 'Ibe Gabirol St 100, Tel Aviv-Yafo',
    accept_10_bis: true,
    lat: 32.083809,
    lon: 34.781548)

Restaurant.create!(
    name: 'Benny The Fisherman',
    max_delivery_time: 10,
    cuisine_id: cuisine_fish.id,
    address: 'Kaf Gimel Yordei Ha-Sira St 1, Tel Aviv-Yafo',
    accept_10_bis: true,
    lat: 32.096775,
    lon: 34.774008)

res = Restaurant.create!(
    name: 'Boccaccio',
    max_delivery_time: 35,
    cuisine_id: cuisine_italian.id,
    address: 'HaYarkon St 106, Tel Aviv-Yafo',
    accept_10_bis: true,
    lat: 32.079907,
    lon: 34.768197)


Review.create!(
    rating: 1,
    restaurant: res
)
Review.create!(
    rating: 3,
    restaurant: res
)

Review.create!(
    rating: 3,
    restaurant: wolfnights
)



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

cuisine_indian = Cuisine.create!(name: 'Indian')
cuisine_french = Cuisine.create!(name: 'French')
cuisine_italian = Cuisine.create!(name: 'Italian')
Cuisine.create!(name: 'Israeli')

Restaurant.create!(
    name: 'Tandoori',
    max_delivery_time: 10,
    cuisine_id: cuisine_indian.id,
    address: 'Zamenhoff St 2, Tel Aviv-Yafo')

Restaurant.create!(
    name: 'Ma Pau',
    max_delivery_time: 10,
    cuisine_id: cuisine_indian.id,
    address: 'Nahalat Binyamin St 59 Tel Aviv-Yafo')

Restaurant.create!(
    name: 'L\'Entrecote',
    max_delivery_time: 10,
    cuisine_id: cuisine_french.id,
    address: 'Ahad Ha\'Am St 28, Tel Aviv-Yafo')

Restaurant.create!(
    name: 'Popina',
    max_delivery_time: 10,
    cuisine_id: cuisine_french.id,
    address: 'Ahad Ha\'Am St 3, Tel Aviv-Yafo')

Restaurant.create!(
    name: 'Amore Mio',
    max_delivery_time: 10,
    cuisine_id: cuisine_italian.id,
    address: 'Ibn Gabirol St 100, Tel Aviv-Yafo')

res = Restaurant.create!(
    name: 'Boccaccio',
    max_delivery_time: 10,
    cuisine_id: cuisine_italian.id,
    address: 'HaYarkon St 106, Tel Aviv-Yafo')


Review.create!(
    rating: 1,
    restaurant: res
)
Review.create!(
    rating: 3,
    restaurant: res
)



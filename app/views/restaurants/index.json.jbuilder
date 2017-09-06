# json.array! @restaurants, partial: 'restaurants/restaurant', as: :restaurant

json.array! @restaurants do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.cuisine_name restaurant.get_cuisine_name
  json.accept_10_bis restaurant.accept_10_bis
  json.max_delivery_time restaurant.max_delivery_time
  json.rating restaurant.calculate_restaurant_rating
  json.address restaurant.address
  json.cuisine_icon restaurant.get_cuisine_icon
  json.lat restaurant.lat
  json.lon restaurant.lon
end
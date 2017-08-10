json.extract! restaurant, :id, :name, :cuisine_id, :rating, :accept_10_bis, :lat, :lon, :max_delivery_time, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)

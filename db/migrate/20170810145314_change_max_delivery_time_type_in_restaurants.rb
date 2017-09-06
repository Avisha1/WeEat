class ChangeMaxDeliveryTimeTypeInRestaurants < ActiveRecord::Migration[5.1]
  def change
    change_column :restaurants, :max_delivery_time, 'integer USING CAST(max_delivery_time AS integer)'
  end
end

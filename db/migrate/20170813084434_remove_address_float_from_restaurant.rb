class RemoveAddressFloatFromRestaurant < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :lon, :float
    remove_column :restaurants, :lat, :float
  end
end

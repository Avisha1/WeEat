class AddCoordinatesToRestaurant < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :lon, :float
    add_column :restaurants, :lat, :float
  end
end

class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :cuisine_id
      t.integer :rating
      t.boolean :accept_10_bis
      t.float :lat
      t.float :lon
      t.string :max_delivery_time

      t.timestamps
    end
  end
end

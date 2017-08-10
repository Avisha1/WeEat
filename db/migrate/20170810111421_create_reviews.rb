class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :comment
      t.timestamp :date
      t.integer :restaurant_id

      t.timestamps
    end
  end
end

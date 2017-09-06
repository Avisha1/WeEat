class ChangeIconInCuisine < ActiveRecord::Migration[5.1]
  def change
    change_column :cuisines, :icon, :string
  end
end

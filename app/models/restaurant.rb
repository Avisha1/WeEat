# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  cuisine_id        :integer
#  accept_10_bis     :boolean
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  address           :string
#  lon               :float
#  lat               :float
#

class Restaurant < ApplicationRecord
  belongs_to :cuisine, foreign_key: :cuisine_id
  has_many :reviews, dependent: :destroy

  validates :name, :cuisine_id, presence: true
  validates :max_delivery_time, numericality: {greater_than_or_equal_to: 0}
  validates :name, uniqueness: { scope: :address }


  def calculate_restaurant_rating

    return 0 if reviews.empty?

    (reviews.sum(:rating) / reviews.count.to_f).round
  end

  def get_cuisine_name
    Cuisine.find(cuisine_id).name
  end

  def get_cuisine_icon
    Cuisine.find(cuisine_id).icon
  end

end

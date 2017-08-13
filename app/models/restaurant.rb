# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  cuisine_id        :integer
#  rating            :integer
#  accept_10_bis     :boolean
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  address           :string
#

class Restaurant < ApplicationRecord
  belongs_to :cuisine, foreign_key: :cuisine_id
  has_many :reviews, dependent: :destroy

  validates :name, :cuisine_id, presence: true
  validates :max_delivery_time, numericality: {greater_than_or_equal_to: 0}
  validates :name, uniqueness: { scope: :address }
end

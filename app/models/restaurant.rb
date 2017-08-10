# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  cuisine_id        :integer
#  rating            :integer
#  accept_10_bis     :boolean
#  lat               :float
#  lon               :float
#  max_delivery_time :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Restaurant < ApplicationRecord
  belongs_to :cuisine, foreign_key: :cuisine_id
  has_many :reviews, dependent: :destroy
end

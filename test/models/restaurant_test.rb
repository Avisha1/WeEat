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

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

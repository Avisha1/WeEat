# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  rating        :integer
#  comment       :text
#  date          :datetime
#  restaurant_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do

  factory :review do
    association :restaurant
    rating 0
    comment 'This is a comment'
  end

  trait :review_1 do
    rating 1
    comment 'nahh'
  end

  trait :review_2 do
    rating 2
    comment 'nice one'
  end

  trait :review_3 do
    rating 3
    comment 'Amazing restaurant'
  end

  trait :review_no_ass do
    restaurant nil
  end

end

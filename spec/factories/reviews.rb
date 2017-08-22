FactoryGirl.define do

  factory :review do
    association :restaurant
    rating 0
    comment 'This is a comment'
  end

  trait :review_1 do
    rating 1
  end

  trait :review_2 do
    rating 2
  end

  trait :review_3 do
    rating 3
  end

end
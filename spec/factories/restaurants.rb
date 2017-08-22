FactoryGirl.define do

  factory :restaurant do
    association :cuisine
    name 'Pam-pam'
    address 'Abn Gabirol 30 TLV'
    max_delivery_time 5
  end
end
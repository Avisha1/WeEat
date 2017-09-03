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

FactoryGirl.define do

  factory :restaurant do
    association :cuisine
    name 'Pam-pam'
    address 'Abn Gabirol 30 TLV'
    max_delivery_time 5
  end

  trait :aroma do
    name 'Aroma'
    address 'Kaplan 5 TLV'
    max_delivery_time 4
  end

  trait :oshi_oshi do
    name 'Oshi-Oshi'
    address 'Dizingof 17 TLV'
    max_delivery_time 30
  end

end
